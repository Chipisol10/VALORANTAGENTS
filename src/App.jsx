import React, { useState, useEffect } from 'react';
import AgentList from './components/AgentList';
import SearchBar from './components/SearchBar';
import RoleFilter from './components/RoleFilter';
import TeamModal from './components/TeamModal';
import Pagination from './components/Pagination';



const App = () => {
  const [agents, setAgents] = useState([]);
  const [filteredAgents, setFilteredAgents] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [role, setRole] = useState('');
  const [team, setTeam] = useState(() => JSON.parse(localStorage.getItem('team')) || []);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;

  useEffect(() => {
    fetch('https://valorant-api.com/v1/agents?isPlayableCharacter=true')
      .then((response) => response.json())
      .then((data) => {
        setAgents(data.data);
        setFilteredAgents(data.data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem('team', JSON.stringify(team));
  }, [team]);

  useEffect(() => {
    let result = agents.filter((agent) =>
      agent.displayName.toLowerCase().includes(searchText.toLowerCase())
    );

    if (role) {
      result = result.filter((agent) => agent.role?.displayName === role);
    }

    setFilteredAgents(result);
    setCurrentPage(1); 
  }, [searchText, role, agents]);

  const paginatedAgents = filteredAgents.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const totalPages = Math.ceil(filteredAgents.length / itemsPerPage);

  const addAgentToTeam = (agent) => {
    if (team.length < 5) {
      setTeam([...team, agent]);
    } else {
      alert('Has alcanzado el límite de 5 agentes en tu equipo.');
    }
  };

  const removeAgentFromTeam = (uuid) => {
    const updatedTeam = team.filter((agent) => agent.uuid !== uuid);
    setTeam(updatedTeam);
  };

  return (
    
    <div className="container mx-auto p-5 bg-red-500 m-20">
      <h1 className="text-4xl font-bold text-center my-10 text-emerald-200">Valorant Agents</h1>
      <SearchBar searchText={searchText} setSearchText={setSearchText} />
      <RoleFilter setRole={setRole} />

      {loading ? (
        <p className="text-center">Cargando...</p>
      ) : paginatedAgents.length > 0 ? (
        <>
          <AgentList
            agents={paginatedAgents}
            addAgentToTeam={addAgentToTeam}
            removeAgentFromTeam={removeAgentFromTeam}
            team={team}
          />
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
          />
        </>
      ) : (
        <p className="text-center text-gray-950 text-lg">No se encontraron agentes que coincidan con la búsqueda.</p>
      )}

      <TeamModal team={team} setTeam={setTeam} />
    </div>
  );
};


export default App;
