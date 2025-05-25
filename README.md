# 🔐 CyberSec Blog

**CyberSec Blog** is an open-source cybersecurity blog website developed by a team of four. The site features articles on cyber attacks, vulnerability analysis, exploitation techniques, and defense strategies.

## 🌐 About the Project

This blog was created with the goal of:

- Raising awareness in the field of cybersecurity  
- Sharing research on vulnerabilities and exploits  
- Analyzing security tools  
- Publishing cybersecurity-related technical articles  
- Encouraging collaborative learning and knowledge sharing

## 👥 Team Members

| Name    | GitHub    | Responsibilities |
|---|---|---|
| A    | [Zahidli Pervin](https://github.com/pervinzahidli) | Create Main homepage (HTML, JavaScript, CSS), Create Admin page (HTML, JavaScript, CSS), Create README.md file |
| B    | [Bunyadova Aytac](https://github.com/bunyadovaytac) | Adding information, Creating JSON files on the site |
| C    | [Rustemov Rustem](https://github.com/Bustamov13) | Create post section (HTML, JavaScript, CSS), Create admin-dashboard HTML file |
| D    | [Alizade Ulvi](https://github.com/AlizadaUlvi) | Create page1, page2, ..., page6 (HTML, JavaScript, CSS), Creating JSON files on the site, localStorage function |

> Replace the names and GitHub URLs with your actual team member details.

## 📁 Project Structure
from folder_structure import FolderStructureGenerator

# List of folders to be ignored in the folder structure generation
folders_to_ignore = [
    "__pycache__",
    ".git",
    ".idea",
    "venv",
]

# Generate the markdown representation of the folder structure
folder_structure_generator = FolderStructureGenerator(ignored_folders=folders_to_ignore)
folder_structure_md = folder_structure_generator.generate_folder_structure_md()

# Print the markdown representation of the folder structure
print(folder_structure_md)

To run the project locally:

```bash
git clone https://github.com/pervinzahidli/Web-Development-Project.git
cd Web-Development-Project
