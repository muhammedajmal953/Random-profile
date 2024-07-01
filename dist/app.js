"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("./services");
document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const profileDiv = document.getElementById('profile');
    const profileService = new services_1.ProfileService();
    generateBtn.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const profile = yield profileService.getRandomProfile();
            profileDiv.innerHTML = `
                <div class="card" style="width: 18rem; margin: auto;">
                    <img src="${profile.picture.large}" class="card-img-top" alt="Profile Picture">
                    <div class="card-body">
                        <h5 class="card-title">${profile.name.first} ${profile.name.last}</h5>
                        <p class="card-text">${profile.email}</p>
                    </div>
                </div>
            `;
        }
        catch (error) {
            profileDiv.innerHTML = `<p class="text-danger">Failed to load profile. Please try again.</p>`;
        }
    }));
});
