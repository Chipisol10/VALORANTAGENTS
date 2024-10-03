import React from 'react';

const AgentList = ({ agents, addAgentToTeam, removeAgentFromTeam, team }) => {
  const isAgentInTeam = (agent) => team.some((teamAgent) => teamAgent.uuid === agent.uuid);

  return (
    <div className="grid grid-cols-3 gap-4">
      {agents.map((agent) => (
        <div
          key={agent.uuid}
          className="bg-blue-300 p-4 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:translate-y-1"
        >
          <img
            src={agent.displayIcon}
            alt={agent.displayName}
            className="w-full h-32 object-cover"
          />
          <h2 className="text-xl font-bold mt-2 text-red-600">{agent.displayName}</h2>
          <p className="text-sm text-gray-900">{agent.role?.displayName}</p>
          {isAgentInTeam(agent) ? (
            <button
              className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-900 hover:text-gray-100 transition-colors duration-300"
              onClick={() => removeAgentFromTeam(agent.uuid)}
            >
              Eliminar del equipo
            </button>
          ) : (
            <button
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-900 hover:text-gray-100 transition-colors duration-300"
              onClick={() => addAgentToTeam(agent)}
            >
              Agregar al equipo
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default AgentList;
