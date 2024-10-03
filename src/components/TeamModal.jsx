import React, { useState } from 'react';

const TeamModal = ({ team, setTeam }) => {
  const [isOpen, setIsOpen] = useState(false);

  const removeAgent = (uuid) => {
    const updatedTeam = team.filter((agent) => agent.uuid !== uuid);
    setTeam(updatedTeam);
  };

  return (
    <div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded  hover:bg-blue-900 hover:text-gray-100 transition-colors duration-300" onClick={() => setIsOpen(true)}>
        Ver Equipo ({team.length}/5)
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-blue-200 p-5 rounded max-w-md w-full">
            <h2 className="text-xl font-bold mb-4 text-center">Agentes del equipo</h2>
            {team.length > 0 ? (
              <ul>
                {team.map((agent) => (
                  <li key={agent.uuid} className="mb-4 flex items-center justify-between border-b pb-2">
                    <div className="flex items-center space-x-4">
                   
                      <img
                        src={agent.displayIcon}
                        alt={agent.displayName}
                        className="w-16 h-16 rounded-full"
                      />
                      
                      <span className="font-medium text-lg">{agent.displayName}</span>
                    </div>
                    <button
                      className="ml-4 bg-red-500 text-white px-2 py-1 rounded"
                      onClick={() => removeAgent(agent.uuid)}
                    >
                      Eliminar
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-center">No has agregado agentes al equipo aún.</p>
            )}
            <button className="mt-4 bg-red-800 text-white px-4 py-2 rounded w-full" onClick={() => setIsOpen(false)}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamModal;
