

import { ProfileService } from './services';
import { Profile } from './models';


document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn')!;
    const profileDiv = document.getElementById('profile')!;
    const profileService = new ProfileService();

    generateBtn.addEventListener('click', async () => {
        try {
            const profile: Profile = await profileService.getRandomProfile();
           
            
            profileDiv.innerHTML = `
                <div class="card" style="width: 18rem; margin: auto;">
                    <img src="${profile.picture.large}" class="card-img-top" alt="Profile Picture">
                    <div class="card-body">
                        <h5 class="card-title">${profile.name.first} ${profile.name.last}</h5>
                        <p class="card-text">${profile.email}</p>
                    </div>
                </div>
            `;
        } catch (error) {
            profileDiv.innerHTML = `<p class="text-danger">Failed to load profile. Please try again.</p>`;
        }
    });
});
