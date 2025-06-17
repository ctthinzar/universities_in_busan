# Universities in Busan
  A responsive static website that showcases universities in Busan, South Korea. Designed with a clean, mobile-first layout, interactive filters, a live search bar, and individual detail pages featuring maps and homepage links. This project demonstrates how to render structured data from a JSON file and present it in an engaging, user-friendly format.

## Features

### Homepage
- Responsive Layout: Optimized for mobile, tablet, and desktop using media queries and grid systems.
- University Cards: Each university appears as a card with a smooth hover shadow effect.
- Detail Page Navigation: A "View details" button opens a dedicated page for each university.
- Filter by Type: Dropdown filter allows users to display universities by type (e.g., National, Private).
- Search by Name: Real-time search bar shows results as the user types, with a fallback "No result to show" message when no match is found.

### Detail Page (Per University)
- Homepage Link: Directs the user to the university's official website.
- Interactive Map: Leaflet.js map showing the location of the university.
- Back to Home Button: Easy navigation back to the homepage.

## Tools & Technologies Used

- HTML5 & CSS3 – Page structure and styling
- JavaScript (ES6+) – Interactive behavior and data handling
- Font Awesome v5.15.4 – Icons
- Google Fonts (Roboto Regular) – Web typography
- Leaflet.js – Embedding interactive maps
- External JSON file – Centralized university data storage
- Git & GitHub – Version control and hosting

## What I Tried

1. Used media queries and grid layout for responsive design across breakpoints
2. Filtered university cards by type using a  dropdown
3. Displayed dynamic search results with real-time feedback on each keystroke
4. Rendered all homepage and detail page content from a single JSON data source
5. Linked university cards to their respective detail pages
6. Created working homepage buttons and links to each university's website
Attempted to:
7. Fetch university ranking data from a reliable external source
8. Automatically retrieve latitude and longitude using university names
9. Embed Google Maps as an interactive map solution

## What Succeeded

1. Full responsiveness on major screen sizes (mobile-first)
2. Filter dropdown and live search both function correctly
3. JSON data is successfully used to render university content without manual input
4. All detail pages display the correct content, maps, and links
5. University homepage links open correctly in a new tab

## What Failed / Challenges

1. Could not fetch ranking data due to authentication or complexity issues
2. Automatic geolocation by university name was unsuccessful; coordinates were manually added in the JSON file
3. Google Maps API was not used due to billing/credit requirements, so Leaflet was used as an alternative

## How to Run This Project

To get this project up and running on your local machine:

1. **Clone the repository**
   ```bash
   git clone https://github.com/ctthinzar/universities_in_busan.git

2. **Open the homepage**
   ```bash
   cd universities_in_busan

## Author

Created by Chyu Thant Thinzar

**Disclaimer**
This is a piece of school work in the "Introduction to Internet and Web" course as a final project of the semester.
