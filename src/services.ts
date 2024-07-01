import axios from 'axios';
import { Profile, ApiResponse } from './models';

export class ProfileService {
    private apiUrl: string = 'https://randomuser.me/api/';

    async getRandomProfile(): Promise<Profile> {
        try {
            const response = await axios.get<ApiResponse>(this.apiUrl);
            const profile = response.data.results[0];
            return profile;
        } catch (error) {
            throw new Error('Error fetching profile');
        }
    }
}
