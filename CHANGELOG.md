# Portfolio Website Changelog

## Version 1.0.0 (Initial Release)

### Features
- Created modern portfolio website with Next.js
- Implemented purple and black color theme
- Added custom mouse cursor that changes color based on background
- Created Hero section with animated text and scroll indicator
- Added About section with skills and experience
- Implemented Projects section with card layout
- Created 3D Blender donut with scroll animations (later simplified to CSS)
- Added animated testimonials section (later changed to Game Industry Inspirations)
- Implemented Contact section
- Added Footer with social links and Quick Links
- Created responsive design for all screen sizes
- Added smooth animations throughout the site

### Technical Implementation
- Set up Next.js with TypeScript
- Configured TailwindCSS for styling
- Implemented Framer Motion for animations
- Added GSAP for additional animation control
- Set up responsive layout with mobile support
- Implemented scroll-triggered animations

### Bug Fixes
- Fixed Three.js dependency issues by replacing with CSS animations
- Fixed testimonials component error with proper hooks
- Corrected CSS issues in globals.css

## Version 1.1.0 (Navigation Enhancement)

### Features
- Added floating semi-transparent navbar
- Implemented active section highlighting in navbar
- Added smooth scrolling between sections
- Created loading screen with animated ring progress indicator
- Renamed "Testimonials" section to "Game Industry Inspirations"
- Updated content with quotes from famous game industry figures
- Added scroll-to-top button with color change on click

## Version 1.2.0 (Design Overhaul)

### Features
- Completely redesigned the website to match modern XR portfolio layout
- Updated color scheme to use vibrant purple (#8a2be2) as primary color
- Changed Hero section to "Explore My Creative XR Portfolio" with dual CTA buttons
- Redesigned Projects section to a 4-column grid layout
- Added new "Cutting-Edge Tech" section with 3 categories
- Transformed Inspirations section to feature a single prominent quote with image
- Simplified Contact section to "Let's Connect and Collaborate" with two buttons
- Updated navbar with "Zage" branding
- Added custom scrollbar with purple accent

### Technical Implementation
- Reorganized component order in main page
- Updated CSS variables for consistent theming
- Improved responsive design for all sections
- Enhanced animations for smoother transitions

## Version 1.3.0 (Testimonials Slider)

### Features
- Redesigned Inspirations section to a testimonial slider with dark background
- Added navigation controls (prev/next buttons) for cycling through testimonials
- Implemented indicator dots to show current testimonial position
- Added Webflow logo placeholder at the top of the testimonials section
- Centered the testimonial quote with larger text for better readability
- Created a clean, minimalist design focused on the testimonial content

### Technical Implementation
- Added state management for tracking current testimonial index
- Implemented circular navigation through testimonials array
- Created smooth transitions between testimonials
- Improved accessibility with proper ARIA labels for navigation controls

## Version 1.3.1 (Theme Updates)

### Features
- Changed Inspirations section background to white with purple accents
- Added auto-switching functionality to testimonials with 5-second delay
- Updated About section to use the primary purple theme from the home section
- Added skill progress bars with animated filling
- Created a glass-like effect for the experience card with backdrop blur
- Added subtle background blurs for a more dynamic look

### Technical Implementation
- Implemented useEffect hook with interval for auto-switching testimonials
- Added key props to motion components for proper re-rendering during transitions
- Enhanced animations with exit transitions for smoother testimonial switching
- Updated color schemes throughout to maintain consistent theming

## Version 2.0.0 (Multi-Page Structure)

### Features
- Transformed the website from a single-page to a multi-page application
- Created dedicated pages for Projects, About, and Contact sections
- Added consistent page structure across all pages (Header, Body, CTA, Footer)
- Implemented a "refresh to home" behavior that returns users to the homepage on refresh
- Enhanced Projects page with filtering capability by category
- Added detailed About page with skills, experience, and education sections
- Created comprehensive Contact page with form, contact info, and map

### Technical Implementation
- Updated navigation system to use Next.js Link components
- Implemented proper routing between pages
- Added page-specific animations and transitions
- Created consistent CTA sections on each page to encourage exploration
- Fixed TypeScript errors related to Set conversion
- Implemented browser refresh behavior to always return to homepage
- Enhanced form validation and submission feedback on Contact page

## Version 2.1.0 (Interactive Project Showcase)

### Features
- Completely redesigned the Projects page with interactive playcard-style project showcases
- Added mouse-following "Play" button that appears when hovering over project videos
- Implemented scroll animations where projects appear as you scroll down and disappear as you scroll up
- Enhanced project descriptions with detailed information about each XR experience
- Added tech stack information for each project with visual tags
- Removed the "Explore More Projects" section for a more focused showcase experience

### Technical Implementation
- Used Framer Motion's useInView hook to detect when each project card enters the viewport
- Implemented mouse position tracking for the interactive "Play" button
- Added TypeScript type annotations to ensure type safety
- Created smooth animations for project cards with proper transitions
- Enhanced the visual design with card shadows and subtle hover effects
- Improved accessibility with proper contrast and focus states

## Version 2.1.1 (Enhanced Project Showcase)

### Features
- Redesigned "Explore My XR Projects" section to function as a full-page experience
- Added sticky header and footer for the project showcase section
- Implemented smooth transition animations between project cards during scrolling
- Centered video content on the left side of project cards
- Removed "View Details" button for cleaner interface
- Added indicator dots in the footer for manual project navigation

### Technical Implementation
- Used Framer Motion's scrollYProgress to create scroll-linked animations
- Implemented sticky positioning for header and footer elements
- Created synchronized appear/disappear animations for project transitions
- Added TypeScript type annotations for improved type safety
- Enhanced the overall UI with proper spacing and layout adjustments
- Improved the mouse-following play button interaction

## Version 2.1.2 (Enhanced Project Navigation)

### Features
- Changed "Explore My XR Projects" to "Explore My Projects" for a cleaner title
- Updated the header background from dark to light gray to match the site's style
- Implemented fixed section scrolling where only project cards animate while header and footer remain static
- Added smart scroll behavior that only allows page scrolling when reaching the first or last project
- Slowed down animations by 0.25x for smoother transitions between projects

### Technical Implementation
- Added custom wheel event handling to control scroll behavior within the project section
- Implemented state tracking for first and last project to control scroll behavior
- Added spring animation for smoother transitions between projects
- Created manual scroll position adjustments to maintain the fixed section effect
- Fixed TypeScript errors with proper type annotations and variable declarations
- Enhanced user experience with more intuitive scrolling behavior

## Version 2.1.3 (Optimized Project Showcase)

### Features
- Increased the section size of "Explore My Projects" for a more immersive experience
- Significantly decreased scroll speed for project playcards for finer control
- Adjusted the vertical spacing to better showcase each project
- Improved the overall proportions of the project showcase section

### Technical Implementation
- Increased the height of the project cards container from 70vh to 85vh
- Added more vertical padding to the project section (from py-12 to py-20)
- Reduced scroll sensitivity from 0.25 to 0.1, so one scroll moves approximately 1/3 of a playcard
- Fine-tuned the animation timing to match the new scroll speed

## Version 2.1.4 (Enhanced Project Transitions)

### Features
- Implemented slide-in/slide-out animations for project cards similar to the reference images
- Added scale effects during transitions for a more dynamic presentation
- Improved the visual flow between projects with smoother animations
- Enhanced user experience with direction-aware transitions

### Technical Implementation
- Added AnimatePresence from Framer Motion to handle card transitions
- Created custom animation variants with enter, center, and exit states
- Implemented scroll direction detection to determine animation direction
- Used spring animations for natural, physics-based motion
- Added scale effects to create depth during transitions
- Optimized rendering by only showing the active project card

## Version 2.1.5 (Refined Animations)

### Features
- Decreased animation speed for project playcards by 2x for a more elegant transition
- Enhanced the visual experience with slower, more deliberate animations
- Improved the overall feel of project transitions

### Technical Implementation
- Reduced spring stiffness from 50 to 25 for slower motion
- Reduced damping from 15 to 10 for a gentler transition
- Added explicit duration of 1 second (doubled from the default)
- Increased opacity transition duration from 0.5 to 1 second

## Version 2.1.6 (Enhanced Visual Design)

### Features
- Enhanced the Projects component with improved card design
- Added hover effects to project cards with image scale animations
- Redesigned navigation controls with better interaction feedback
- Enhanced Hero section with more engaging animations and modern design elements
- Added animated underline effect to the Hero section title
- Improved the design of skill tags with backdrop blur and border effects
- Updated CTA buttons with better hover transitions and shadow effects
- Enhanced scroll indicator animation in the Hero section
- Refined copy text throughout the site for better user engagement

### Technical Implementation
- Implemented more sophisticated Framer Motion animations in the Hero section
- Added staggered animations for skill tags in the Hero section
- Enhanced transition effects throughout the site with smoother durations
- Added backdrop blur for a more modern glassmorphism effect
- Improved shadow effects with color overlays for more depth
- Optimized responsive layout for better mobile experience

## Version 2.2.0 (About Page Enhancement)

### Features
- Replaced "Skills & Expertise" section with a new "Achievements" section based on the reference design
- Added interactive video player to the Achievements section with mouse-following "Play" button
- Incorporated statistics display (100% completion rate and 200+ projects completed)
- Changed the "Education" section color theme to match the primary theme (purple)
- Transformed the CTA section from purple to white background for better visual contrast
- Enhanced overall visual flow and user experience in the About page

### Technical Implementation
- Implemented mouse position tracking for the interactive "Play" button in the video player
- Added React state management for tracking mouse position and hover state
- Created smooth animations for the Play button using Framer Motion
- Used backdrop blur effect for enhanced visual aesthetics
- Maintained consistent theming across sections with appropriate color transitions

## Version 2.2.1 (UI Refinements)

### Features
- Changed education section cards to white with black text for improved readability
- Reduced the footer size by approximately 1/3 for a more compact layout
- Adjusted all page sections to be more compact with reduced padding
- Enhanced overall page proportions and visual balance

### Technical Implementation
- Updated education card styling from semi-transparent to solid white background
- Changed text colors in education cards to a grayscale palette for better contrast
- Reduced footer padding, margins, and text sizes throughout
- Decreased section padding consistently across all page sections (from py-20 to py-16)
- Made CTA section more compact (py-16 to py-12) to maintain proper vertical rhythm

## Version 2.2.2 (UI Consistency Update)

### Features
- Updated the "About Me" section header on the About page to use the Galactic Adventure theme
- Updated the "Connect with Me" section on the Contact page to match the Galactic Adventure theme
- Redesigned the Hero section on the Home page to adopt the Galactic Adventure color scheme and style
- Added consistent badges/tags across sections for visual coherence

### Technical Implementation
- Applied gradient background (from-primary to-primary-dark) to replace solid backgrounds
- Decreased padding on the Experience section (py-16 to py-12) to emphasize the Education section
- Added badges with rounded-full styling and semi-transparent backgrounds
- Enhanced typography sizing and spacing for better visual hierarchy
- Maintained section heights proportionate to their content importance

## Version 2.2.3 (Spline 3D Integration)

### Features
- Added Spline 3D model as an interactive background to the Hero section
- Removed the right-side video player placeholder
- Enhanced the scroll indicator with a more modern animation
- Maintained the gradient overlay for text readability

### Technical Implementation
- Integrated Spline viewer using Next.js Script component for proper loading
- Added TypeScript declarations for the custom spline-viewer element
- Applied z-index layering to ensure proper element stacking
- Set background model to display behind content with semi-transparent gradient overlay
- Improved the scroll indicator with animated dot inside a rounded rectangle

## Version 2.3.0 (Carousel Experience)

### Features
- Implemented a carousel-style display for project playcards
- Made the active project card more prominent with full opacity and scale
- Added fading effect to non-active cards based on distance from active card
- Moved navigation controls below the playcards for better user experience
- Added dot indicators for direct navigation between projects
- Enhanced the visual hierarchy with a blue ring around the active card

### Technical Implementation
- Created new animation variants for non-active carousel items
- Implemented distance-based scaling and opacity for surrounding cards
- Added visual indicators to show the active card (blue ring highlight)
- Only show the mouse-following play button on the active card
- Positioned navigation controls below playcards before the "Technologies and Features" section
- Enhanced the mouse interaction to properly detect when hovering over video areas

## Version 2.3.1 (True Carousel Experience)

### Features
- Implemented direct wheel scroll interaction for the carousel
- Changed from gradual scrolling to full card changes with each scroll action
- Removed fading animations for a true carousel effect with cards side by side
- Enhanced visual distinction of the active card with stronger shadow effects
- Simplified navigation with intuitive scroll direction mapping

### Technical Implementation
- Up scroll (negative deltaY) = left direction (previous project)
- Down scroll (positive deltaY) = right direction (next project)
- Increased horizontal spacing between cards for better visibility
- Maintained full opacity for all cards for a cleaner carousel look
- Added spring animations with higher stiffness for more responsive transitions
- Enhanced the active card with shadow-2xl for better visual hierarchy

## Version 2.3.2 (Refined Carousel Interaction)

### Features
- Limited carousel scrolling to only activate when mouse is within the playcard area
- Changed color scheme from blue to black and white for a more elegant look
- Repositioned and reduced size of navigation controls
- Enhanced overall user experience with more intuitive scrolling behavior

### Technical Implementation
- Added detection to only handle wheel events when mouse is over the carousel container
- Allowed normal page scrolling when mouse is outside the carousel area
- Moved navigation controls to the bottom of the carousel
- Changed button colors to grayscale (black/white) instead of blue
- Reduced size of navigation buttons and dot indicators
- Changed active card highlight from blue ring to subtle black ring

## Version 2.4.0 (Hero Section & Simplified UI)

### Features
- Added a new "Galactic Adventure" hero section with purple theme at the top of the page
- Removed the left-aligned "Explore My Projects" header
- Kept only the center-aligned section title for cleaner design
- Simplified project cards to show only essential information
- Enhanced navigation controls with larger buttons and increased spacing

### Technical Implementation
- Created a full-screen hero section with gradient background and sample content
- Added mockup navigation in the hero section
- Simplified project info section to display just project name, description, and tech stack
- Removed scrolling from the project info section for better readability
- Increased the size of navigation buttons for better usability
- Increased spacing between navigation buttons for clearer visual separation
- Removed dot indicators to focus on the main navigation controls

## Version 2.4.1 (Visual Refinements)

### Features
- Simplified hero section by removing logo and explore button
- Added blur effect to non-active project cards for better focus
- Lowered navigation controls for better visual separation
- Reduced overall size of the project section for better proportions

### Technical Implementation
- Added blur filter (3px) and reduced opacity (0.6) for non-active cards
- Centered navigation menu in the hero section
- Positioned navigation controls below the carousel (bottom-[-40px])
- Reduced height of carousel container from 85vh to 70vh
- Reduced height of project cards from 70vh to 60vh
- Reduced maximum width of project cards for better proportions

## Version 2.4.2 (Layout Refinements)

### Features
- Merged "Explore My Projects" title with the playcard section
- Positioned title 20px above the playcards for better visual flow
- Fixed navigation button positioning to ensure visibility
- Added rounded corners to all sides of the playcards for consistent styling

### Technical Implementation
- Removed the fixed header with sticky positioning
- Added the title directly above the playcards with proper spacing (mb-8)
- Added top padding (pt-20) to ensure proper spacing from the hero section
- Moved navigation buttons further down (bottom-[-60px]) and added bottom margin (mb-8)
- Added rounded corners to both sides of the playcards (rounded-l-xl and rounded-r-xl)
- Maintained the existing blur and opacity effects for non-active cards

## Version 2.4.3 (UI Enhancements)

### Features
- Removed navigation menu from the hero section for a cleaner look
- Updated hero section color theme to match the "Experience XR Innovation" section
- Repositioned elements in the project section for better visual hierarchy
- Enhanced the "Explore My Projects" title with larger size and better positioning

### Technical Implementation
- Changed hero section colors from purple to primary theme colors
- Updated tag backgrounds to use primary-dark instead of purple-700
- Made the "Explore My Projects" title larger (text-3xl) and black
- Increased spacing below the title (mb-12) and added top margin (mt-12)
- Moved playcards upward with negative top margin (mt-[-20px])
- Maintained the overall section size while adjusting internal element positions

## Version 2.4.4 (March 31, 2025)
### Features
- Updated the Projects component to implement a carousel layout with manual navigation buttons.
- Removed the auto-changing functionality for project display.
- Implemented smooth sliding animations for project cards when navigating left or right.
- Enhanced project cards to better accommodate descriptions and technologies.
- Adjusted the animation speed for smoother transitions.
- Added a 5cm gap between the navigation buttons and the bottom padding of the section.
- Updated the project titles and descriptions to reflect the latest projects.
- Modified the carousel to allow simultaneous entrance and exit animations for project cards.

### Technical Implementation
- Implemented carousel layout with manual navigation buttons.
- Removed auto-changing functionality for project display.
- Added smooth sliding animations for project cards.
- Enhanced project cards to better accommodate descriptions and technologies.
- Adjusted animation speed for smoother transitions.
- Added gap between navigation buttons and bottom padding of the section.
- Updated project titles and descriptions.
- Modified carousel to allow simultaneous entrance and exit animations.

## Version 2.4.5 (March 31, 2025)
### Features
- Reduced lower padding by half in the "Project Showcase" section for better visual balance
- Updated the Tech section title to "Discover the Advanced Technology Behind Them"
- Modified the Tech section description text to be more concise and personal
- Replaced "Learn More" links with specific technology buttons in the Tech section:
  - Added C# and C++ buttons for Programming Languages
  - Added Unity and Unreal buttons for Game Engines
  - Added Blender and Houdini buttons for 3D Modeling Software
- Added external links to learning resources for each technology button
- Implemented custom button styling with hover and active states
- Updated tech section buttons to use rounded-full style for more curved appearance matching the "Want to Learn More?" section

### Technical Implementation
- Reduced padding in Project section from py-20 to py-10
- Added target="_blank" and rel="noopener noreferrer" to external links for security
- Implemented responsive button layout using flex spacing
- Created conditional rendering based on category IDs
- Added white background with black text for buttons, transitioning to purple with white text on hover, and grey when clicked
- Updated tech section buttons to use rounded-full style for more curved appearance matching the "Want to Learn More?" section

## Version 2.4.6 (March 31, 2025)
### Features
- Updated the changelog to document the changes made to the Projects page carousel navigation controls and spacing

### Technical Implementation
- Added changelog entry for Projects page carousel navigation controls and spacing changes

## Version 2.4.7 (March 31, 2025)
### Features
- Updated quote styling with purple highlights for "difficult", "time consuming", and "process is enjoyable"
- Right-aligned the attribution for the quote for a more professional appearance
- Changed footer text elements from white to black for better contrast against purple background
- Updated footer hover effects to change text to white (instead of accent color)

### Technical Implementation
- Added text-primary spans around key phrases in the quote
- Added text-right class to the attribution div
- Changed all text-white classes to text-black in the footer
- Updated hover:text-accent to hover:text-white for all links in the footer
- Maintained existing layout and structure while improving visual contrast

## Version 2.4.8 (March 31, 2025)
### Features
- Created context-aware Footer that displays differently on the Home page versus other pages
- Maintained purple theme with black text for the Home page footer only
- Reverted to the original dark theme with white text for Project, About, and Contact pages
- Enhanced brand consistency while providing visual distinction between pages

### Technical Implementation
- Added Next.js usePathname hook to detect current route
- Implemented conditional styling using ternary operators
- Created single Footer component that adapts to its context instead of multiple components
- All text and background colors now change based on which page is being viewed
- Maintained consistent layout and content across all variations

## Version 2.4.9 (March 31, 2025)
### Features
- Renamed "Testimonials" section to "Inspirations" for better alignment with the content's purpose
- Updated component naming and references throughout the codebase
- Maintained consistent styling and functionality while changing terminology

### Technical Implementation
- Changed component name from Testimonials to Inspirations
- Updated references in the Home page
- Modified footer quick links to point to the new section ID
- Updated all function names (nextTestimonial → nextInspiration, etc.)
- Preserved the existing UI, animations, and carousel functionality

## Version 2.4.10 (March 31, 2025)
### Features
- Added personal social media links to the footer
- Replaced Twitter icon with Linktree icon
- Increased size of social media icons for better visibility
- Added proper external link behavior for all social links

### Technical Implementation
- Added GitHub link: https://github.com/PritamPaul01
- Added LinkedIn link: https://www.linkedin.com/in/pritam-pal-oo7/
- Added Linktree link: https://linktr.ee/its_me_pritam
- Implemented proper SVG for the Linktree logo
- Increased icon size from w-5/h-5 to w-6/h-6
- Added target="_blank" and rel="noopener noreferrer" attributes for secure external linking
- Increased spacing between icons for better visual separation

## Version 2.4.11 (March 31, 2025)
### Features
- Updated the changelog to document the changes made to the Projects page carousel navigation controls and spacing

### Technical Implementation
- Added changelog entry for Projects page carousel navigation controls and spacing changes

## Version 2.5.0 (March 31, 2025)
### Features
- Replaced the Technologies and Features section with a personal quote section featuring image
- Added your personal quote with elegant typography: "Even if it's difficult and time consuming, it doesn't matter, as long as the process is enjoyable"
- Updated the footer section to use the primary purple theme instead of the secondary dark theme
- Enhanced visual consistency across the site with the purple branding

### Technical Implementation
- Created a two-column layout in the quote section with image on left and quote on right
- Added a responsive design for the quote section that stacks on mobile devices
- Changed footer background from bg-secondary to bg-primary
- Updated footer border colors from primary/20 to white/20 for better contrast
- Maintained all existing footer links and content

## Version 2.5.1 (March 31, 2025)
### Features
- Updated quote styling with purple highlights for "difficult", "time consuming", and "process is enjoyable"
- Right-aligned the attribution for the quote for a more professional appearance
- Changed footer text elements from white to black for better contrast against purple background
- Updated footer hover effects to change text to white (instead of accent color)

### Technical Implementation
- Added text-primary spans around key phrases in the quote
- Added text-right class to the attribution div
- Changed all text-white classes to text-black in the footer
- Updated hover:text-accent to hover:text-white for all links in the footer
- Maintained existing layout and structure while improving visual contrast

## Version 2.5.2 (March 31, 2025)
### Features
- Created context-aware Footer that displays differently on the Home page versus other pages
- Maintained purple theme with black text for the Home page footer only
- Reverted to the original dark theme with white text for Project, About, and Contact pages
- Enhanced brand consistency while providing visual distinction between pages

### Technical Implementation
- Added Next.js usePathname hook to detect current route
- Implemented conditional styling using ternary operators
- Created single Footer component that adapts to its context instead of multiple components
- All text and background colors now change based on which page is being viewed
- Maintained consistent layout and content across all variations

## Version 2.5.3 (March 31, 2025)
### Features
- Renamed "Testimonials" section to "Inspirations" for better alignment with the content's purpose
- Updated component naming and references throughout the codebase
- Maintained consistent styling and functionality while changing terminology

### Technical Implementation
- Changed component name from Testimonials to Inspirations
- Updated references in the Home page
- Modified footer quick links to point to the new section ID
- Updated all function names (nextTestimonial → nextInspiration, etc.)
- Preserved the existing UI, animations, and carousel functionality

## Version 2.5.4 (March 31, 2025)
### Features
- Added personal social media links to the footer
- Replaced Twitter icon with Linktree icon
- Increased size of social media icons for better visibility
- Added proper external link behavior for all social links

### Technical Implementation
- Added GitHub link: https://github.com/PritamPaul01
- Added LinkedIn link: https://www.linkedin.com/in/pritam-pal-oo7/
- Added Linktree link: https://linktr.ee/its_me_pritam
- Implemented proper SVG for the Linktree logo
- Increased icon size from w-5/h-5 to w-6/h-6
- Added target="_blank" and rel="noopener noreferrer" attributes for secure external linking
- Increased spacing between icons for better visual separation

## Version 2.5.5 (March 31, 2025)
### Features
- Updated the changelog to document the social media link changes in the footer

### Technical Implementation
- Added changelog entry for social media link changes

## Version 2.5.6 (March 31, 2025)
### Features
- Replaced Linktree icon with email icon in the footer
- Added direct email link to metro1pal2000@gmail.com
- Maintained consistent styling with other social media icons

### Technical Implementation
- Changed href from Linktree URL to mailto: link
- Updated SVG icon to use standard email icon
- Preserved size, positioning, and interactive behavior
- Email opens in system default email client when clicked

## Version 2.5.7 (March 31, 2025)
### Features
- Improved navigation in the footer quick links
- Removed the "Inspirations" link from quick links for cleaner navigation
- Updated all links to proper page URLs instead of section anchors

### Technical Implementation
- Changed all quick links to point to full page URLs:
  - Home: Changed from "#" to "/"
  - About: Changed from "#about" to "/about"
  - Projects: Changed from "#projects" to "/projects" 
  - Contact: Changed from "#contact" to "/contact"
- Removed the "Inspirations" link entirely from the footer navigation
- Maintained consistent styling and hover effects on all links

## Version 2.5.8 (March 31, 2025)
### Features
- Updated the changelog to document the changes to the footer quick links navigation system

### Technical Implementation
- Added changelog entry for footer quick links navigation system changes

## Version 2.5.9 (March 31, 2025)
### Features
- Enhanced the Projects page navigation controls and spacing
- Improved visual consistency between Home page and Projects page
- Added better spacing below the project carousel for improved readability

### Technical Implementation
- Increased section height from min-h-[130vh] to min-h-[140vh]
- Added more bottom padding by changing pb-10 to pb-24
- Increased the gap between navigation buttons and section bottom by changing bottom-[-30px] to bottom-[-80px]
- Updated navigation button styling to match the Home page:
  - Changed from p-3 to w-12 h-12 for consistent sizing
  - Replaced default SVG icons with the same SVG patterns used on the Home page
  - Maintained the same hover effects and disabled states

## Version 2.6.0 (March 31, 2025)
### Features
- Increased the size of the "Explore My Projects" section for better visual impact
- Enhanced the project carousel display area for improved project visibility
- Maintained consistent padding and spacing throughout the section

### Technical Implementation
- Increased overall section height from min-h-[140vh] to min-h-[160vh]
- Expanded carousel container height from h-[65vh] to h-[80vh]
- Preserved all navigation controls positioning and styling
- Maintained the 5cm gap between navigation buttons and section bottom

## Version 2.6.1 (March 31, 2025)
### Features
- Improved spacing in the "Explore My Projects" carousel
- Added padding to the video player section for better visual appeal
- Increased distance between navigation buttons for easier interaction

### Technical Implementation
- Added p-6 padding to the video player container
- Changed spacing between navigation buttons from space-x-16 to space-x-24
- Maintained existing styling for buttons, hover states, and animations
- Preserved the existing layout structure while improving spacing proportions

## Version 2.6.2 (March 31, 2025)
### Features
- Added extra bottom padding to the video player component in project playcards
- Maintained consistent side and top padding while enhancing bottom spacing
- Improved visual balance between video player and surrounding content

### Technical Implementation
- Changed uniform p-9 padding to directional padding
- Used pt-9 for top spacing (unchanged)
- Used px-9 for horizontal spacing (unchanged)
- Added pb-16 for bottom spacing (increased from equivalent of 9 to 16)
- Maintained consistent background color and other styling

## Version 2.6.3 (March 31, 2025)
### Features
- Updated the changelog to document the addition of extra bottom padding to the video player in project playcards

### Technical Implementation
- Added changelog entry for the addition of extra bottom padding to the video player in project playcards

## Version 2.6.4 (March 31, 2025)
### Features
- Fixed play button hover effect in project cards
- Standardized padding in video player area for consistent appearance
- Fixed SVG attribute errors for navigation buttons

### Technical Implementation
- Added direct mouse event handlers to the video player container
- Implemented separate onMouseMove and onMouseLeave handlers for better hover detection
- Changed from directional padding (pt-9 px-9 pb-24) to consistent padding with bottom override (p-9 pb-24)
- Corrected duplicate SVG path attributes that were causing rendering inconsistencies
- Ensured the play button appears and follows the mouse properly on active project hover

## Version 2.6.5 (March 31, 2025)
### Features
- Updated the changelog to document the changes made to the project content in the playcards

### Technical Implementation
- Updated project data for all 4 playcards with personal project information:
  - "Immersive AR Universe" (AR project with planet models)
  - "AR Medical App" (Interactive educational medical application)
  - "VR Surgery Simulator" (Medical training application)
  - "Space Showroom X" (VR automotive experience)
- Set correct video paths (PV1.mp4, PV2.mp4, PV3.mp4, PV4.mp4)
- Preserved original project categories and featured status
- Maintained consistent data structure across all projects

## Version 2.6.6 (March 31, 2025)
### Features
- Added interactive video playback functionality to project playcards
- Implemented click-to-play video controls for all projects
- Created toggle mechanism to switch between video player and preview mode

### Technical Implementation
- Added state tracking for which video is currently playing
- Implemented conditional rendering for video element vs. play button preview
- Added onClick handler to toggle video playback when user clicks
- Added proper z-indexing to ensure video appears above other elements
- Included standard video controls for playback, volume, and fullscreen
- Only showing the play button cursor when the video is not already playing
- Used autoPlay to start video immediately after clicking

## Version 2.6.7 (March 31, 2025)
### Features
- Updated the changelog to document the video playback functionality added to project playcards

### Technical Implementation
- Added changelog entry for video playback functionality added to project playcards

## Version 2.6.8 (March 31, 2025)
### Features
- Removed padding from video player container for better video display
- Maximized visible area of videos in project playcards
- Improved overall visual appearance of video content

### Technical Implementation
- Removed all padding classes (p-9, pb-24) from the video container
- Maintained rounded corners and overflow handling
- Ensured video fills the entire container area
- Preserved all video playback functionality and controls

## Version 2.6.9 (March 31, 2025)
### Features
- Updated the changelog to document the theme changes made to the Projects page, particularly the new black and purple color scheme and navigation button states.

### Technical Implementation
- Updated the entire Projects page with a sleek black and purple theme
- Enhanced navigation buttons with interactive color states
- Improved visual contrast for better content visibility
- Created a more cohesive and modern design language

### Technical Implementation
- Changed section background from gray to deep black
- Changed video player container background from white to black
- Updated tech stack items with purple border and black backgrounds
- Styled navigation buttons with three distinct states:
  - Normal: Black background with white arrows
  - Hover: White background with black arrows 
  - Active/Click: Purple background with white arrows
- Added purple accent color to headings and key text elements
- Enhanced the play button with more vibrant purple overlay
- Improved text contrast with proper opacity levels for hierarchy

## Version 2.7.0 (March 31, 2025)
### Features
- Updated the Projects page background to light gray while keeping enhanced styling
- Maintained the contrast between section background and interactive elements
- Created a balanced visual design with light background and dark content

### Technical Implementation
- Changed section background from black back to light gray (bg-gray-100)
- Updated section title text color to dark gray/black for better contrast
- Preserved all other styling enhancements:
  - Interactive navigation button states
  - Purple accents for headings and technology labels
  - Black video container for better video display
  - Enhanced technology tags with purple borders

## Version 2.7.1 (March 31, 2025)
### Features
- Updated navigation button hover state to purple with white text
- Created consistent visual language for button interactions
- Improved user feedback on interactive elements

### Technical Implementation
- Changed hover state from white background/black text to purple background/white text
- Maintained active state as purple background with white text
- Created a smooth transition between normal, hover and active states
- Applied changes consistently to both previous and next buttons

## Version 2.7.2 (March 31, 2025)
### Features
- Updated the changelog to document the changes to the navigation button hover state.

### Technical Implementation
- Added changelog entry for navigation button hover state changes

## Version 2.7.3 (March 31, 2025)
### Features
- Updated the changelog to document the UI Mockups section that replaced the Technologies and Features section.

### Technical Implementation
- Replaced "Technologies and Features" section with new "UI Mockups" grid
- Added 4 project UI mockup images with titles and descriptions
- Created responsive grid layout for optimal viewing on all devices

### Technical Implementation
- Implemented a grid layout (1 column on mobile, 2 on tablets, 4 on desktop)
- Added 4 UI mockup images with consistent styling:
  - Website UI for College Fest (/images/PI1.png)
  - Website UI for Society Project (/images/PI2.png)
  - VR Surgery Simulator UI (/images/PI3.png)
  - Space Showroom X UI for XRCH Hackathon (/images/PI4.png)
- Used aspect-w-16 aspect-h-12 for consistent image proportions
- Applied shadow-lg and rounded-lg for visual polish
- Used primary color for titles to maintain design consistency
- Added proper image alt text for accessibility

## Version 2.7.4 (March 31, 2025)
### Features
- Enhanced the UI Mockups section with interactive image viewing
- Added hover effects with subtle purple glow on mockup images
- Implemented modal view for enlarged image viewing
- Adjusted spacing to accommodate larger section size

### Technical Implementation
- Increased spacing between UI mockup grid items (gap-12)
- Added hover effects to images:
  - Purple glow effect using custom shadow
  - Subtle scale effect (105%) on hover
  - Smooth transitions with duration-300
- Created image enlargement functionality:
  - Added state tracking for the selected image
  - Implemented modal overlay with animated transitions
  - Added close button in the top-right corner
  - Made modal responsive with proper sizing constraints
  - Used framer-motion for smooth open/close animations
  - Added click-away functionality to dismiss the modal

## Version 2.7.5 (March 31, 2025)
### Features
- Updated close button styling in image modal
- Repositioned close button for better visual balance
- Created consistent interactive button states

### Technical Implementation
- Moved close button further to the right (-right-12 instead of -right-4)
- Changed button color scheme to white background with black text
- Added hover state to use primary purple color with white text
- Added matching active state for consistent interaction
- Maintained rounded shape and shadow for visual cohesion

## Version 2.7.6 (March 31, 2025)
### Features
- Updated the changelog to document the changes made to the image modal close button styling and positioning.

### Technical Implementation
- Added changelog entry for image modal close button styling and positioning changes

## Version 2.8.0 (March 31, 2025)
### Features
- Replaced the Technologies and Features section with a personal quote section featuring image
- Added your personal quote with elegant typography: "Even if it's difficult and time consuming, it doesn't matter, as long as the process is enjoyable"
- Updated the footer section to use the primary purple theme instead of the secondary dark theme
- Enhanced visual consistency across the site with the purple branding

### Technical Implementation
- Created a two-column layout in the quote section with image on left and quote on right
- Added a responsive design for the quote section that stacks on mobile devices
- Changed footer background from bg-secondary to bg-primary
- Updated footer border colors from primary/20 to white/20 for better contrast
- Maintained all existing footer links and content

## Version 2.8.1 (March 31, 2025)
### Features
- Updated quote styling with purple highlights for "difficult", "time consuming", and "process is enjoyable"
- Right-aligned the attribution for the quote for a more professional appearance
- Changed footer text elements from white to black for better contrast against purple background
- Updated footer hover effects to change text to white (instead of accent color)

### Technical Implementation
- Added text-primary spans around key phrases in the quote
- Added text-right class to the attribution div
- Changed all text-white classes to text-black in the footer
- Updated hover:text-accent to hover:text-white for all links in the footer
- Maintained existing layout and structure while improving visual contrast

## Version 2.8.2 (March 31, 2025)
### Features
- Created context-aware Footer that displays differently on the Home page versus other pages
- Maintained purple theme with black text for the Home page footer only
- Reverted to the original dark theme with white text for Project, About, and Contact pages
- Enhanced brand consistency while providing visual distinction between pages

### Technical Implementation
- Added Next.js usePathname hook to detect current route
- Implemented conditional styling using ternary operators
- Created single Footer component that adapts to its context instead of multiple components
- All text and background colors now change based on which page is being viewed
- Maintained consistent layout and content across all variations

## Version 2.8.3 (March 31, 2025)
### Features
- Renamed "Testimonials" section to "Inspirations" for better alignment with the content's purpose
- Updated component naming and references throughout the codebase
- Maintained consistent styling and functionality while changing terminology

### Technical Implementation
- Changed component name from Testimonials to Inspirations
- Updated references in the Home page
- Modified footer quick links to point to the new section ID
- Updated all function names (nextTestimonial → nextInspiration, etc.)
- Preserved the existing UI, animations, and carousel functionality

## Version 2.8.4 (March 31, 2025)
### Features
- Added personal social media links to the footer
- Replaced Twitter icon with Linktree icon
- Increased size of social media icons for better visibility
- Added proper external link behavior for all social links

### Technical Implementation
- Added GitHub link: https://github.com/PritamPaul01
- Added LinkedIn link: https://www.linkedin.com/in/pritam-pal-oo7/
- Added Linktree link: https://linktr.ee/its_me_pritam
- Implemented proper SVG for the Linktree logo
- Increased icon size from w-5/h-5 to w-6/h-6
- Added target="_blank" and rel="noopener noreferrer" attributes for secure external linking
- Increased spacing between icons for better visual separation

## Version 2.8.5 (March 31, 2025)
### Features
- Updated the changelog to document the social media link changes in the footer

### Technical Implementation
- Added changelog entry for social media link changes

## Version 2.8.6 (March 31, 2025)
### Features
- Replaced Linktree icon with email icon in the footer
- Added direct email link to metro1pal2000@gmail.com
- Maintained consistent styling with other social media icons

### Technical Implementation
- Changed href from Linktree URL to mailto: link
- Updated SVG icon to use standard email icon
- Preserved size, positioning, and interactive behavior
- Email opens in system default email client when clicked

## Version 2.8.7 (March 31, 2025)
### Features
- Improved navigation in the footer quick links
- Removed the "Inspirations" link from quick links for cleaner navigation
- Updated all links to proper page URLs instead of section anchors

### Technical Implementation
- Changed all quick links to point to full page URLs:
  - Home: Changed from "#" to "/"
  - About: Changed from "#about" to "/about"
  - Projects: Changed from "#projects" to "/projects" 
  - Contact: Changed from "#contact" to "/contact"
- Removed the "Inspirations" link entirely from the footer navigation
- Maintained consistent styling and hover effects on all links

## Version 2.8.8 (March 31, 2025)
### Features
- Updated the changelog to document the changes to the footer quick links navigation system

### Technical Implementation
- Added changelog entry for footer quick links navigation system changes

## Version 2.8.9 (March 31, 2025)
### Features
- Enhanced the Projects page navigation controls and spacing
- Improved visual consistency between Home page and Projects page
- Added better spacing below the project carousel for improved readability

### Technical Implementation
- Increased section height from min-h-[130vh] to min-h-[140vh]
- Added more bottom padding by changing pb-10 to pb-24
- Increased the gap between navigation buttons and section bottom by changing bottom-[-30px] to bottom-[-80px]
- Updated navigation button styling to match the Home page:
  - Changed from p-3 to w-12 h-12 for consistent sizing
  - Replaced default SVG icons with the same SVG patterns used on the Home page
  - Maintained the same hover effects and disabled states

## Version 2.9.0 (March 31, 2025)
### Features
- Increased the size of the "Explore My Projects" section for better visual impact
- Enhanced the project carousel display area for improved project visibility
- Maintained consistent padding and spacing throughout the section

### Technical Implementation
- Increased overall section height from min-h-[140vh] to min-h-[160vh]
- Expanded carousel container height from h-[65vh] to h-[80vh]
- Preserved all navigation controls positioning and styling
- Maintained the 5cm gap between navigation buttons and section bottom

## Version 2.9.1 (March 31, 2025)
### Features
- Improved spacing in the "Explore My Projects" carousel
- Added padding to the video player section for better visual appeal
- Increased distance between navigation buttons for easier interaction

### Technical Implementation
- Added p-6 padding to the video player container
- Changed spacing between navigation buttons from space-x-16 to space-x-24
- Maintained existing styling for buttons, hover states, and animations
- Preserved the existing layout structure while improving spacing proportions

## Version 2.9.2 (March 31, 2025)
### Features
- Added extra bottom padding to the video player component in project playcards
- Maintained consistent side and top padding while enhancing bottom spacing
- Improved visual balance between video player and surrounding content

### Technical Implementation
- Changed uniform p-9 padding to directional padding
- Used pt-9 for top spacing (unchanged)
- Used px-9 for horizontal spacing (unchanged)
- Added pb-16 for bottom spacing (increased from equivalent of 9 to 16)
- Maintained consistent background color and other styling

## Version 2.9.3 (March 31, 2025)
### Features
- Updated the changelog to document the addition of extra bottom padding to the video player in project playcards

### Technical Implementation
- Added changelog entry for the addition of extra bottom padding to the video player in project playcards

## Version 2.9.4 (March 31, 2025)
### Features
- Fixed play button hover effect in project cards
- Standardized padding in video player area for consistent appearance
- Fixed SVG attribute errors for navigation buttons

### Technical Implementation
- Added direct mouse event handlers to the video player container
- Implemented separate onMouseMove and onMouseLeave handlers for better hover detection
- Changed from directional padding (pt-9 px-9 pb-24) to consistent padding with bottom override (p-9 pb-24)
- Corrected duplicate SVG path attributes that were causing rendering inconsistencies
- Ensured the play button appears and follows the mouse properly on active project hover

## Version 2.9.5 (March 31, 2025)
### Features
- Updated the changelog to document the changes made to the project content in the playcards

### Technical Implementation
- Updated project data for all 4 playcards with personal project information:
  - "Immersive AR Universe" (AR project with planet models)
  - "AR Medical App" (Interactive educational medical application)
  - "VR Surgery Simulator" (Medical training application)
  - "Space Showroom X" (VR automotive experience)
- Set correct video paths (PV1.mp4, PV2.mp4, PV3.mp4, PV4.mp4)
- Preserved original project categories and featured status
- Maintained consistent data structure across all projects

## Version 2.9.6 (March 31, 2025)
### Features
- Added interactive video playback functionality to project playcards
- Implemented click-to-play video controls for all projects
- Created toggle mechanism to switch between video player and preview mode

### Technical Implementation
- Added state tracking for which video is currently playing
- Implemented conditional rendering for video element vs. play button preview
- Added onClick handler to toggle video playback when user clicks
- Added proper z-indexing to ensure video appears above other elements
- Included standard video controls for playback, volume, and fullscreen
- Only showing the play button cursor when the video is not already playing
- Used autoPlay to start video immediately after clicking

## Version 2.9.7 (March 31, 2025)
### Features
- Updated the changelog to document the video playback functionality added to project playcards

### Technical Implementation
- Added changelog entry for video playback functionality added to project playcards

## Version 2.9.8 (March 31, 2025)
### Features
- Removed padding from video player container for better video display
- Maximized visible area of videos in project playcards
- Improved overall visual appearance of video content

### Technical Implementation
- Removed all padding classes (p-9, pb-24) from the video container
- Maintained rounded corners and overflow handling
- Ensured video fills the entire container area
- Preserved all video playback functionality and controls

## Version 2.9.9 (March 31, 2025)
### Features
- Updated the changelog to document the theme changes made to the Projects page, particularly the new black and purple color scheme and navigation button states.

### Technical Implementation
- Updated the entire Projects page with a sleek black and purple theme
- Enhanced navigation buttons with interactive color states
- Improved visual contrast for better content visibility
- Created a more cohesive and modern design language

### Technical Implementation
- Changed section background from gray to deep black
- Changed video player container background from white to black
- Updated tech stack items with purple border and black backgrounds
- Styled navigation buttons with three distinct states:
  - Normal: Black background with white arrows
  - Hover: White background with black arrows 
  - Active/Click: Purple background with white arrows
- Added purple accent color to headings and key text elements
- Enhanced the play button with more vibrant purple overlay
- Improved text contrast with proper opacity levels for hierarchy

## Version 3.0.0 (Major Design Overhaul)

### Features
- Completely redesigned the TechStack component with modern glassmorphism effects
- Added animated skill bubbles with staggered entrances in the TechStack section
- Enhanced the Footer with glassmorphism design and improved layout with newsletter signup
- Enhanced the Projects component with improved card design and hover animations
- Redesigned Hero section with animated underline effect and improved typography
- Added backdrop blur effects throughout the site for a modern appearance
- Implemented more sophisticated animations with staggered timing
- Created gradient overlays and floating background elements for depth
- Improved interactive elements with better hover and focus states
- Enhanced navigation controls with smoother transitions
- Refined content spacing and layout for better readability

### Technical Implementation
- Added complex Framer Motion animation sequences with custom variants
- Implemented glassmorphism design with backdrop-blur and translucent elements
- Added animated social links with spring animations in the Footer
- Enhanced card designs with layered backgrounds and borders
- Converted anchor tags to Next.js Link components for better performance
- Added newsletter subscription form with custom styling
- Added spring animations for more natural movement
- Used staggered animations for more engaging user experience
- Improved responsive design with better mobile layout
- Implemented advanced hover states with scale and color transitions
- Refined typography with better hierarchy and spacing

## Version 2.1.6 (Enhanced Visual Design)

### Features
- Enhanced the Projects component with improved card design
- Added hover effects to project cards with image scale animations
- Redesigned navigation controls with better interaction feedback
- Enhanced Hero section with more engaging animations and modern design elements
- Added animated underline effect to the Hero section title
- Improved the design of skill tags with backdrop blur and border effects
- Updated CTA buttons with better hover transitions and shadow effects
- Enhanced scroll indicator animation in the Hero section
- Refined copy text throughout the site for better user engagement

### Technical Implementation
- Implemented more sophisticated Framer Motion animations in the Hero section
- Added staggered animations for skill tags in the Hero section
- Enhanced transition effects throughout the site with smoother durations
- Added backdrop blur for a more modern glassmorphism effect
- Improved shadow effects with color overlays for more depth
- Optimized responsive layout for better mobile experience

## Version 2.2.0 (Enhanced User Experience)

### Features
- Enhanced Project component with improved project descriptions and additional projects
- Added two new projects: "Interactive XR Museum" and "Spatial Audio Experience"
- Completely redesigned Testimonials component (Game Industry Inspirations) with direction-aware slide animations
- Added quote decorations and enhanced avatar display in testimonials
- Updated Hero section with dynamic particle effects and more engaging animations
- Added "Featured in" section with technology logos in the Hero section
- Transformed Tech Stack section into a comprehensive 4-category display of XR technologies
- Implemented dynamic floating background elements in Tech Stack section
- Added WebXR Development to the skills showcase in Hero section

### Technical Implementation
- Implemented direction-aware transitions for testimonial slider
- Added AnimatePresence for improved component transitions
- Created staggered animation sequences for skill tags
- Enhanced hover effects with transform translations and shadow effects
- Improved visual hierarchy with glass morphism design in Tech Stack
- Added dynamic animated background elements with infinite animations
- Optimized responsive design for all screen sizes
- Enhanced accessibility with improved contrast and focus states

## Version 2.2.1 (Projects Page Enhancement)

### Features
- Replaced "Experience XR Innovation" section with a new "Development Process" section
- Added 4-step development workflow with visually engaging numbered cards
- Implemented hover animations for the process steps with subtle elevation effects
- Created "Development Toolkit" section with tools and technologies used
- Added visual icons for various development tools (Unity, Blender, C#/C++, Figma)
- Enhanced visual consistency with the rest of the Projects page
- Used a dark theme with purple accents for better visual impact

### Technical Implementation
- Created responsive grid layout for process steps (1 column on mobile, 4 on desktop)
- Added hover animations with transform and border color transitions
- Implemented SVG icons for development tools
- Used consistent styling with the UI Mockups and Future Roadmap sections
- Enhanced visual hierarchy with proper spacing and typography
- Improved accessibility with proper contrast ratios

## Version 2.2.2 (Projects Page Theme Update)

### Features
- Updated the entire Projects page with a modern purple color theme
- Added gradient backgrounds to the Hero section with purple accents
- Transformed project cards with purple-to-black gradients and improved contrast
- Enhanced UI Mockups section with a deep purple background and hover effects
- Changed Future Roadmap section to use a light purple background with matching typography
- Updated Development Process section with a purple gradient background
- Implemented more visually distinct hover effects for development steps with shadow highlights
- Added border accents and improved visual hierarchy throughout the page
- Enhanced the CTA section with a light purple background and improved button hover effects

### Technical Implementation
- Used tailwind color palette with purple-950 to purple-50 for consistent gradation
- Implemented multiple gradient backgrounds (linear and radial) for visual depth
- Improved text contrast for better accessibility across all sections
- Added hover transitions with transform and shadow effects
- Enhanced interactive elements with subtle animations and improved visual feedback
- Maintained consistent purple-black theme throughout the entire projects page
- Ensured proper spacing and responsive design with the new color scheme

## Version 2.7.8 (March 31, 2025)
### Features
- Added actual image to the Future Roadmap section
- Replaced placeholder with real visual content

### Technical Implementation
- Changed from SVG placeholder to actual image (/images/PI11.png)
- Maintained square aspect ratio and consistent styling
- Improved visual appeal of the Future Roadmap section
- Removed placeholder text that's no longer needed with real image
