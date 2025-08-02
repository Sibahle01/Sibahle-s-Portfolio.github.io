// Chatbot JavaScript - Add this to js/chatbot.js

// Professional knowledge base
const knowledgeBase = {
    profile: {
        name: 'Sibahle Sithole',
        title: 'Data Science Professional & Full-Stack Developer',
        location: 'Durban, South Africa',
        email: 'sbahlesithole707@gmail.com',
        phone: '+27 60 243 9425',
        linkedin: 'https://www.linkedin.com/in/sibahle-sithole-a6897625a/',
        youtube: 'https://www.youtube.com/@JourneytoData-h7u/videos',
        education: 'Bachelor of ICT, Durban University of Technology',
        status: 'Available for freelance, consulting, and full-time opportunities'
    },
    
    skills: {
        python: {
            level: 'Advanced',
            experience: '3+ years',
            libraries: ['Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'Folium'],
            highlight: 'Built production-ready ML systems processing 10,000+ daily records'
        },
        sql: {
            level: 'Expert',
            certification: 'Coursera SQL Honors Certificate',
            capabilities: ['Complex Joins', 'Window Functions', 'Performance Optimization', 'Database Design'],
            highlight: 'Optimized queries reducing processing time by 60%'
        },
        ml: {
            algorithms: ['K-Means Clustering', 'Collaborative Filtering', 'Recommendation Systems'],
            achievements: ['85% accuracy in movie recommendation system', 'Optimized delivery routes'],
            highlight: 'Applied unsupervised learning to solve real business problems'
        }
    },
    
    experience: {
        title: 'Data Science Intern at Loop Platform',
        duration: 'July 2025',
        achievements: [
            'Reduced delivery route planning time by 30%',
            'Identified optimal fulfillment centers, saving 15% in logistics costs',
            'Built automation scripts processing 10,000+ daily data points',
            'Implemented geospatial analysis for delivery predictions'
        ]
    },
    
    projects: {
        movie_recommendation: {
            title: 'Advanced Movie Recommendation Engine',
            description: 'Sophisticated recommendation system with collaborative filtering',
            achievements: ['85% accuracy', 'Sub-second response time', 'Scalable for 1000+ users'],
            tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy']
        },
        medical_pipeline: {
            title: 'Medical Data Integration Pipeline',
            description: 'Enterprise-grade ETL pipeline for medical surveillance',
            achievements: ['60% processing time reduction', '50,000+ records monthly', 'Zero data loss'],
            tech: ['Python', 'SQL', 'PowerBI', 'Database Design']
        },
        ai_game: {
            title: 'AI Tic-Tac-Toe with Reinforcement Learning',
            description: 'Unbeatable AI using advanced RL algorithms',
            achievements: ['100% win/draw rate', 'Minimax with alpha-beta pruning'],
            tech: ['Python', 'Reinforcement Learning', 'Game Theory']
        }
    },
    
    certifications: [
        'SQL Honors Certificate (Coursera, 2024)',
        'Machine Learning with Python (Coursera, 2024)',
        'Statistics for Data Science (Udemy, 2024)'
    ]
};

// Response patterns
const responsePatterns = {
    greeting: [
        "Hello! I'm here to provide comprehensive information about Sibahle Sithole's professional background and technical expertise. How may I assist you today?",
        "Welcome! I can share detailed insights about Sibahle's data science capabilities, project experience, and professional achievements. What would you like to know?",
        "Greetings! I'm your guide to learning about Sibahle's exceptional skills in data science, machine learning, and software development. How can I help?"
    ],
    
    skills_general: [
        "Sibahle possesses exceptional technical expertise across multiple domains. His core competencies include advanced Python programming (3+ years), expert-level SQL with Coursera Honors certification, machine learning implementation, and full-stack development. His programming portfolio spans enterprise-scale data processing, ML systems achieving 85% accuracy, and production-ready applications. Would you like details about any specific technical area?",
        
        "His technical skill set demonstrates both depth and breadth: Advanced Python with libraries including Pandas, NumPy, and Scikit-learn; Expert SQL capabilities with database optimization expertise; Machine Learning implementation with proven 85% accuracy rates; Full-stack development including JavaScript, HTML/CSS; Business Intelligence tools including PowerBI. Each skill is validated through real-world projects and measurable results."
    ],
    
    python: [
        "Sibahle's Python expertise represents 3+ years of advanced development experience. His proficiency spans data analysis libraries (Pandas, NumPy), machine learning frameworks (Scikit-learn), visualization tools (Matplotlib, Seaborn), and geospatial analysis (Folium). Notable achievements include building production-ready ML systems processing 10,000+ daily records, implementing automated data pipelines, and developing scalable recommendation algorithms. His Python code emphasizes efficiency, maintainability, and business impact.",
        
        "His Python capabilities are demonstrated through enterprise-level applications: automated ETL pipelines processing medical data, machine learning recommendation systems, and geospatial analysis for logistics optimization. He combines technical proficiency with practical problem-solving, delivering solutions that scale effectively in production environments."
    ],
    
    sql: [
        "Sibahle holds expert-level SQL certification through Coursera Honors achievement, demonstrating exceptional database management capabilities. His expertise includes complex joins and subqueries, window functions and CTEs, performance optimization techniques, database design principles, and query tuning strategies. A standout achievement includes optimizing medical data queries that reduced processing time by 60%, directly impacting operational efficiency.",
        
        "His SQL expertise extends beyond basic querying to include advanced database optimization, complex analytical functions, and enterprise-scale data processing. His work with medical data pipelines processing 50,000+ monthly records showcases his ability to handle large-scale database operations efficiently."
    ],
    
    experience: [
        "Sibahle's professional experience at Loop Platform as a Data Science Intern demonstrates exceptional impact in delivery optimization. Key achievements include: 30% reduction in delivery route planning time through K-Means clustering implementation, 15% savings in logistics costs via optimal fulfillment center identification, development of Python automation processing 10,000+ daily data points, and implementation of geospatial analysis using drive-time isochrones. His work directly contributed to operational efficiency and cost reduction.",
        
        "His internship showcased ability to apply advanced data science techniques to real business challenges. The combination of machine learning algorithms, geospatial analysis, and automation scripting resulted in measurable ROI and demonstrated his capacity to bridge technical implementation with business value."
    ],
    
    projects: [
        "Sibahle's project portfolio demonstrates technical excellence across multiple domains. The Movie Recommendation Engine achieved 85% accuracy using collaborative filtering and hybrid algorithms, processing recommendations with sub-second response times for 1000+ users. The Medical Data Integration Pipeline reduced processing time by 60% while handling 50,000+ monthly records with zero data loss. The AI Tic-Tac-Toe implementation achieved 100% win/draw rates using minimax algorithms with alpha-beta pruning.",
        
        "Each project showcases different aspects of his expertise: machine learning implementation, enterprise data engineering, and artificial intelligence algorithms. The consistent theme is delivering production-ready solutions that solve real-world problems with measurable performance improvements."
    ],
    
    contact: [
        `Sibahle is available for professional opportunities and can be reached through multiple channels: Email: ${knowledgeBase.profile.email} | Phone: ${knowledgeBase.profile.phone} | LinkedIn: ${knowledgeBase.profile.linkedin} | YouTube Channel: ${knowledgeBase.profile.youtube} | Location: ${knowledgeBase.profile.location}. He is actively seeking roles in data science, machine learning engineering, full-stack development, and business intelligence. His availability includes freelance projects, consulting engagements, and full-time positions.`,
        
        `Professional contact information: ${knowledgeBase.profile.email} for direct communication, ${knowledgeBase.profile.phone} for immediate inquiries, LinkedIn profile for professional networking, and YouTube channel showcasing his data science journey. Sibahle welcomes discussions about technical projects, career opportunities, and collaborative ventures where his expertise can drive business success.`
    ],
    
    certifications: [
        "Sibahle's professional certifications validate his technical expertise: SQL Honors Certificate from Coursera (2024) demonstrating advanced database management and optimization skills; Machine Learning with Python certification (Coursera, 2024) covering supervised/unsupervised learning and model deployment; Statistics for Data Science (Udemy, 2024) providing strong analytical foundations. These certifications complement his practical experience and demonstrate commitment to continuous professional development.",
        
        "His certification portfolio reflects both theoretical knowledge and practical application. The Honors designation in SQL certification indicates top-tier performance, while the Machine Learning certification aligns with his proven 85% accuracy achievements in production ML systems."
    ]
};

let conversationHistory = [];
let isTyping = false;
let isWidgetOpen = false;

// Toggle chat widget open/close
function toggleChatWidget() {
    const chatbot = document.getElementById('chatbot');
    const launcher = document.getElementById('chatLauncher');
    const notification = document.getElementById('chatNotification');
    
    isWidgetOpen = !isWidgetOpen;
    
    if (isWidgetOpen) {
        chatbot.classList.add('open');
        launcher.classList.add('active');
        launcher.innerHTML = '✕';
        if (notification) notification.style.display = 'none';
    } else {
        chatbot.classList.remove('open');
        chatbot.classList.remove('minimized');
        launcher.classList.remove('active');
        launcher.innerHTML = '💬';
    }
}

// Minimize chatbot (different from close)
function minimizeChatbot() {
    const chatbot = document.getElementById('chatbot');
    const minimizeBtn = document.getElementById('minimizeBtn');
    
    chatbot.classList.toggle('minimized');
    minimizeBtn.textContent = chatbot.classList.contains('minimized') ? '+' : '−';
}

// Handle key press in input
function handleKeyPress(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        sendMessage();
    }
}

// Quick question function
function askQuestion(question) {
    const input = document.getElementById('chatInput');
    input.value = question;
    sendMessage();
}

// Send message function
function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    
    if (!message || isTyping) return;
    
    // Add user message
    addMessage(message, 'user');
    input.value = '';
    
    // Show typing indicator and generate response
    showTypingIndicator();
    
    setTimeout(() => {
        const response = generateResponse(message);
        hideTypingIndicator();
        addMessage(response, 'bot');
    }, 1500 + Math.random() * 1000); // Random delay for realism
}

// Add message to chat
function addMessage(text, sender) {
    const messagesContainer = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    
    messageDiv.innerHTML = `
        <div class="message-bubble">${text}</div>
        <div class="message-time">${getCurrentTime()}</div>
    `;
    
    // Remove quick actions if they exist
    const quickActions = messagesContainer.querySelector('.quick-actions');
    if (quickActions) quickActions.remove();
    
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    
    // Store in conversation history
    conversationHistory.push({
        message: text,
        sender: sender,
        timestamp: new Date().toISOString()
    });
}

// Show/hide typing indicator
function showTypingIndicator() {
    isTyping = true;
    const indicator = document.getElementById('typingIndicator');
    const sendBtn = document.getElementById('sendBtn');
    
    if (indicator) indicator.style.display = 'block';
    if (sendBtn) sendBtn.disabled = true;
    
    const messagesContainer = document.getElementById('chatMessages');
    if (messagesContainer) messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function hideTypingIndicator() {
    isTyping = false;
    const indicator = document.getElementById('typingIndicator');
    const sendBtn = document.getElementById('sendBtn');
    
    if (indicator) indicator.style.display = 'none';
    if (sendBtn) sendBtn.disabled = false;
}

// Generate intelligent responses
function generateResponse(userMessage) {
    const message = userMessage.toLowerCase();
    
    // Intent detection
    if (isGreeting(message)) {
        return getRandomResponse('greeting');
    } else if (isPythonQuery(message)) {
        return getRandomResponse('python');
    } else if (isSQLQuery(message)) {
        return getRandomResponse('sql');
    } else if (isSkillsQuery(message)) {
        return getRandomResponse('skills_general');
    } else if (isExperienceQuery(message)) {
        return getRandomResponse('experience');
    } else if (isProjectsQuery(message)) {
        return getRandomResponse('projects');
    } else if (isCertificationsQuery(message)) {
        return getRandomResponse('certifications');
    } else if (isContactQuery(message)) {
        return getRandomResponse('contact');
    } else {
        return generateContextualResponse(message);
    }
}

// Intent detection functions
function isGreeting(message) {
    const greetings = ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'greetings'];
    return greetings.some(greeting => message.includes(greeting));
}

function isPythonQuery(message) {
    return message.includes('python') || message.includes('pandas') || message.includes('numpy');
}

function isSQLQuery(message) {
    return message.includes('sql') || message.includes('database') || message.includes('query');
}

function isSkillsQuery(message) {
    const skillKeywords = ['skill', 'ability', 'expertise', 'technical', 'programming', 'technologies'];
    return skillKeywords.some(keyword => message.includes(keyword));
}

function isExperienceQuery(message) {
    const expKeywords = ['experience', 'work', 'job', 'internship', 'loop', 'professional', 'career'];
    return expKeywords.some(keyword => message.includes(keyword));
}

function isProjectsQuery(message) {
    const projectKeywords = ['project', 'portfolio', 'built', 'developed', 'movie', 'medical', 'tic tac toe'];
    return projectKeywords.some(keyword => message.includes(keyword));
}

function isCertificationsQuery(message) {
    const certKeywords = ['certification', 'certificate', 'qualification', 'degree', 'education', 'coursera'];
    return certKeywords.some(keyword => message.includes(keyword));
}

function isContactQuery(message) {
    const contactKeywords = ['contact', 'email', 'phone', 'hire', 'available', 'reach'];
    return contactKeywords.some(keyword => message.includes(keyword));
}

// Get random response from pattern
function getRandomResponse(pattern) {
    const responses = responsePatterns[pattern];
    return responses[Math.floor(Math.random() * responses.length)];
}

// Generate contextual response for general queries
function generateContextualResponse(message) {
    const fallbackResponses = [
        "I'd be happy to provide specific information about Sibahle's professional background. You can ask about his technical skills, work experience, project portfolio, certifications, or contact information. What specific area interests you?",
        
        "Sibahle's expertise spans data science, machine learning, and full-stack development with proven results in production environments. His work includes 30% efficiency improvements, 85% ML accuracy rates, and processing systems handling 50,000+ monthly records. Which aspect would you like to explore further?",
        
        "His professional profile combines strong technical capabilities with business impact. From Python automation to SQL optimization, machine learning implementation to enterprise data pipelines, Sibahle delivers measurable results. What specific information can I provide?"
    ];
    
    return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
}

// Utility functions
function getCurrentTime() {
    return new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
}

function updateMessageTime() {
    const timeElements = document.querySelectorAll('.message-time');
    timeElements.forEach(el => {
        if (!el.textContent) {
            el.textContent = getCurrentTime();
        }
    });
}

// Initialize chatbot widget
function initChatbot() {
    updateMessageTime();
    
    // Show notification after 3 seconds to attract attention
    setTimeout(() => {
        const notification = document.getElementById('chatNotification');
        if (notification && !isWidgetOpen) {
            notification.style.display = 'flex';
        }
    }, 3000);
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Check if chatbot elements exist before initializing
    if (document.getElementById('chatbot')) {
        initChatbot();
    }
});
