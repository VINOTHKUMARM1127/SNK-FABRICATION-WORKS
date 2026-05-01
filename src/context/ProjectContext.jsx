import { createContext, useState, useEffect, useContext } from 'react';
import { fetchSanityProjects } from '../api/config';

const ProjectContext = createContext();

export const useProjects = () => useContext(ProjectContext);

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const data = await fetchSanityProjects();
        setProjects(data || []);
      } catch (err) {
        console.error('Failed to load projects:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <ProjectContext.Provider value={{ projects, loading, error }}>
      {children}
    </ProjectContext.Provider>
  );
};
