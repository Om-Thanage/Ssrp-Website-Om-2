// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import Projects from './Projects_details'; // Ensure you export the projects array to use it here
// import './Project_description.css';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const ProjectDescription = () => {
//   const { projectId } = useParams();
//   const [loading, setLoading] = useState(true);
//   const [project, setProject] = useState(null);

//   useEffect(() => {
//     AOS.init({ duration: "2000" });

//     const foundProject = Projects.find(p => p.id === parseInt(projectId));

//     // Introduce a delay of 2 seconds before setting the project and loading state
//     const timer = setTimeout(() => {
//       setProject(foundProject);
//       setLoading(false);
//     }, 2000);

//     // Cleanup timeout if the component unmounts
//     return () => clearTimeout(timer);
//   }, [projectId]);

//   // if (loading) {
//   //   return (
//   //     <div className='project-loading'>
//   //       <div className='loading'>{Projects.map((project)) => {
//   //         <div className='project-content' data-aos="fade-up">
//   //           <div className='project-title'>{project.title}</div>
//   //         </div>
        
//   //       </div>
//   //     </div>
//   //   );
//   // }

//   if (loading) {
//     return (
//       <div className='project-loading'>
//         <div className='loading'>
//           {Projects.map((project) => (
//             <div key={project.id} className='project-content' data-aos="fade-up">
//               <div className='project-title'>{project.title}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }

//   if (!project) {
//     return <div>Project not found</div>;
//   }

//   return (
//     <div className='details-container'>
//       <div className='details-content'>
//         <img src={project.image} alt={project.title} data-aos="fade-up" />
//         <div className='details' data-aos="fade-left">
//           <div className='details-title'>{project.title}</div>
//           <div className='details-section-heading'>Description</div>
//           <div className='details-description text'>{project.description}</div>
//           <div className='details-section-heading'>Objective</div>
//           <div className='details-objectives text'>{project.objective}</div>
//           <div className='details-section-heading'>Outcomes</div>
//           <div className='details-outcomes text'>{project.outcomes}</div>
//         </div>
//         <a href={'/project'} className='details-link'>Go Back to Projects Page</a>
//       </div>
//     </div>
//   );
// };

// export default ProjectDescription;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Projects from './Projects_details'; // Ensure you export the projects array to use it here
import './Project_description.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProjectDescription = () => {
  const { projectId } = useParams();
  const [loading, setLoading] = useState(true);
  const [project, setProject] = useState({ title: 'Loading...' });

  useEffect(() => {
    AOS.init({ duration: "2000" });

    const foundProject = Projects.find(p => p.id === parseInt(projectId));

    if (foundProject) {
      setProject(foundProject);
    }

    // Introduce a delay of 2 seconds before setting the loading state to false
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    // Cleanup timeout if the component unmounts
    return () => clearTimeout(timer);
  }, [projectId]);

  if (loading) {
    return (
      <div className='project-loading' style={{ height: '75vh', width: '80vw', margin:'10vw', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue' }} data-aos='fade-up'>
        <div className='project-title'>{project.title}</div>
      </div>
    );
  }

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className='details-container'>
      <div className='details-content'>
        <img src={project.image} alt={project.title} data-aos="fade-up" />
        <div className='details' data-aos="fade-left">
          <div className='details-title'>{project.title}</div>
          <div className='details-section-heading'>Description</div>
          <div className='details-description text'>{project.description}</div>
          <div className='details-section-heading'>Objective</div>
          <div className='details-objectives text'>{project.objective}</div>
          <div className='details-section-heading'>Outcomes</div>
          <div className='details-outcomes text'>{project.outcomes}</div>
        </div>
        <a href={'/project'} className='details-link'>Go Back to Projects Page</a>
      </div>
    </div>
  );
};

export default ProjectDescription;
