import os
import subprocess
import random
import time
from datetime import datetime, timedelta

# Function to generate a random commit date within the last year
def random_commit_date():
    days_ago = random.randint(1, 365)  # Random number of days within the past year
    random_date = (datetime.now() - timedelta(days=days_ago)).strftime("%Y-%m-%dT%H:%M:%S")
    return random_date

# Function to commit the changes with a random commit date
def git_commit_with_random_dates(language, directories):
    for output_dir in directories:
        # Add the directory to staging
        subprocess.run(["git", "add", output_dir], check=True)
        
        # Generate commit message and random commit date
        commit_message = f"Add {language} client code for {output_dir}"
        commit_date = random_commit_date()

        # Set GIT_COMMITTER_DATE and commit with the random date
        env = os.environ.copy()
        env["GIT_COMMITTER_DATE"] = commit_date
        subprocess.run(["git", "commit", "-m", commit_message, "--date", commit_date], check=True, env=env)

        print(f"Committed {language} client code for {output_dir} with date {commit_date}.")
        
        # Wait for 30 seconds before the next commit
        print("Waiting for 30 seconds before the next commit...")
        time.sleep(30)

# Main function to find 'python-client' directories and commit them
def find_python_client_dirs_and_commit(root_dir, language):
    python_client_dirs = []

    # Traverse the directory tree and collect directories ending with 'python-client'
    for subdir, _, _ in os.walk(root_dir):
        if subdir.endswith("python-client"):
            python_client_dirs.append(subdir)

    # Commit to git with randomized dates
    git_commit_with_random_dates(language, python_client_dirs)

# Set the root directory and start the process
if __name__ == "__main__":
    root_directory = "/Users/seanbaker/openapispecs"  # Change this to your actual path
    language = "python"
    find_python_client_dirs_and_commit(root_directory, language)