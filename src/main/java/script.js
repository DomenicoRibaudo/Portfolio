document.addEventListener('DOMContentLoaded', function () {
    const projects = document.querySelectorAll('.project');

    projects.forEach(project => {
        project.addEventListener('mouseenter', function () {
            const rect = project.getBoundingClientRect();
            const projectHeight = rect.height;
            const projectWidth = rect.width;
            const scaleFactor = 1.05;

            project.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
            project.style.transform = `scale(${scaleFactor})`;
            project.style.boxShadow = `0 0 30px rgba(0, 0, 0, 0.8)`;

            const newHeight = projectHeight * scaleFactor;
            const newWidth = projectWidth * scaleFactor;
            const heightDiff = newHeight - projectHeight;
            const widthDiff = newWidth - projectWidth;

            if (heightDiff > 0) {
                const topOffset = heightDiff / 2;
                project.style.marginTop = `-${topOffset}px`;
            }

            if (widthDiff > 0) {
                const leftOffset = widthDiff / 2;
                project.style.marginLeft = `-${leftOffset}px`;
            }
