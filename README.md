Description:

This Node.js command-line application takes a user's input to generate a logo and save it to an SVG file. The application prompts the user to select a color and shape, provide text for the logo, and keep the generated SVG to a .svg file.


Mock-Up
"C:\Users\Admin\Desktop\svg_shapes\examples\img\Screenshot 2023-05-05 171218.png"
"C:\Users\Admin\Desktop\svg_shapes\examples\img\Screenshot 2023-05-05 171036.png"
<img width="185" alt="Screenshot 2023-05-05 160300" src="https://user-images.githubusercontent.com/126128634/236571561-f9c9463f-1871-4261-a0b1-dfb778c17b86.png">
"C:\Users\Admin\Desktop\svg_shapes\examples\img\Screenshot 2023-05-05 160015.png"
"C:\Users\Admin\Desktop\svg_shapes\examples\img\Screenshot 2023-05-05 155331.png"
"C:\Users\Admin\Desktop\svg_shapes\examples\img\Screenshot 2023-05-05 083202.png"
"C:\Users\Admin\Desktop\svg_shapes\examples\img\Screenshot 2023-05-05 080400.png"

User Story:

AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer

Acceptance Criteria:
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered

Github Repository: https://github.com/TiffanyParks/svg_shapes.git
Screencastify: https://watch.screencastify.com/v/ok0pW1pCSyhOLW8lS7Gr


Dependencies:

* fs-extra: 11.1.1,
* inquirer: 8.2.4,
* prompt": 1.3.0,
* jest": 24.9.0,
* node-fetch: 2.6.7
* svg: 1.1
	*  xmlns="http://www.w3.org/2000/svg"
