Description:

This Node.js command-line application takes a user's input to generate a logo and save it to an SVG file. The application prompts the user to select a color and shape, provide text for the logo, and keep the generated SVG to a .svg file.


Mock-Up

<img width="185" alt="Screenshot 2023-05-05 160300" src="https://user-images.githubusercontent.com/126128634/236571561-f9c9463f-1871-4261-a0b1-dfb778c17b86.png">
<img width="125" alt="Screenshot 2023-05-05 160015" src="https://user-images.githubusercontent.com/126128634/236571772-222e8148-6e5a-417c-8c73-1966de8fb88b.png">
<img width="186" alt="Screenshot 2023-05-05 155331" src="https://user-images.githubusercontent.com/126128634/236571788-2a527c17-96c9-46fa-82f5-1fbee6a55965.png">
<img width="246" alt="Screenshot 2023-05-05 083202" src="https://user-images.githubusercontent.com/126128634/236571802-6ca7cd34-d26e-495b-8503-a4a018dddd7f.png">
<img width="214" alt="Screenshot 2023-05-05 080400" src="https://user-images.githubusercontent.com/126128634/236571823-5c2a3acf-4756-4f4e-a522-b2d4a85bd101.png">


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
