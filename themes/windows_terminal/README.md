## Usage

1. Copy the content from your selected `.json` colorscheme.
2. Access settings by pressing `Ctrl` + `,`.
3. Scroll down to `"schemes"` and paste the colorscheme data:
   ```json
   {
     "name": "GitHub Dark",
     "background": "#30363d",
     "foreground": "#e6edf3"
     // Add more color settings
   }
   ```
4. Scroll to `"profiles"` and apply the scheme to your profile:
   ```json
   {
     "guid": "{<profile-guid>}",
     "colorScheme": "GitHub Dark"
     // Other profile settings
   }
   ```
5. Save and close the settings.
6. Restart Windows Terminal and enjoy!
