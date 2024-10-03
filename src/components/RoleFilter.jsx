import React from 'react';

const roles = ['Controller', 'Duelist', 'Initiator', 'Sentinel'];

const RoleFilter = ({ setRole }) => {
  return (
    <select
      className="w-full p-2 mb-4 border rounded bg-blue-200 text-red-700 border-red-300 placeholder-red-400 focus:outline-none focus:ring-2 focus:ring-red-300"
      onChange={(e) => setRole(e.target.value)}
    >
      <option value="">Filtrar por rol</option>
      {roles.map((role) => (
        <option key={role} value={role}>
          {role}
        </option>
      ))}
    </select>
  );
};

export default RoleFilter;
