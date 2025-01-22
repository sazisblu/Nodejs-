# Introduction to Git

Git is a free and open-source version control system that helps developers track changes in their codebase over time. It allows multiple developers to collaborate on a project by creating a centralized repository of all changes made to the code.

# Benefits of Using Git

1. Version Control: Git keeps a record of all changes made to the code, allowing developers to easily revert to previous versions if needed.
2. Collaboration: Git enables multiple developers to work on the same project simultaneously, reducing conflicts and improving productivity.
3. Backup: Git provides a backup of the codebase, ensuring that all changes are safely stored and can be recovered in case of data loss.
4. Branching and Merging: Git's branching and merging features allow developers to work on different features or bug fixes independently, making it easier to manage complex projects.
5. Open-Source: Git is open-source, which means it is free to use and distribute, and its source code is available for modification and customization.s
## Some Useful Git commands
1. **git log --oneline** : view all your git logs in a single line 
2. **git checkout**:  Allows you to traverse between branches and commits 
3. **git push and git pull**:
4. **git remote add origin** : We can have multiple origins in a single project (This is done when we want remote access to our code from a separate device)
5. **git push origin branch_name**: If we dont specify the branch name then , pushing happens at the default origin's active branch.
6. **git branch -D /branch name/**: Deletes the specified branch 
7. **git checkout -B /branch name/** : Creates and swiches to new branch 
		


# Branches
- There is a default branch known as master in every repo
- We don't work in **master** but we create a new branch known as **dev**.
- If we want to create a new branch **we branch off from this dev branch** .


