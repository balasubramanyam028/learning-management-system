import mongoose from 'mongoose';
import Course from './models/courseModel.js'; // adjust path if needed

// ----------------------
// MongoDB Connection
// ----------------------
const MONGO_URI = "mongodb+srv://balu04594:Balu_1994@publishpixellms.7eukhqn.mongodb.net/?retryWrites=true&w=majority&appName=PublishPixelLMS"; // e.g., mongodb+srv://username:password@cluster0.mongodb.net

mongoose.set('strictQuery', false);

const connectDb = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      dbName: 'Lms',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Database connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1);
  }
};

// ----------------------
// Dummy Courses Data
// ----------------------
const seedCourses = [
  {
    title: "Unreal Engine Mastery",
    description: "Learn Unreal Engine from scratch and build AAA-quality games.",
    price: 19999,
    category: "Game Development",
    createdBy: "Admin",
    thumbnail: {
      public_id: "placeholder_id",
      secure_url: "https://via.placeholder.com/150"
    }
  },
  {
    title: "Blender 3D Essentials",
    description: "Complete Blender course for beginners to advanced level.",
    price: 14999,
    category: "3D Modeling",
    createdBy: "Admin",
    thumbnail: {
      public_id: "placeholder_id",
      secure_url: "https://via.placeholder.com/150"
    }
  },
  {
    title: "Unity Mobile Game Development",
    description: "Build fully functional mobile games with Unity.",
    price: 17999,
    category: "Game Development",
    createdBy: "Admin",
    thumbnail: {
      public_id: "placeholder_id",
      secure_url: "https://via.placeholder.com/150"
    }
  },
  {
    title: "Generative AI Course",
    description: "Master AI tools for game development, design, and content creation.",
    price: 15999,
    category: "AI & Tools",
    createdBy: "Admin",
    thumbnail: {
      public_id: "placeholder_id",
      secure_url: "https://via.placeholder.com/150"
    }
  },
  {
    title: "Video Editing with Unreal",
    description: "Learn cinematic editing using Unreal Engine sequencer.",
    price: 9999,
    category: "Video Editing",
    createdBy: "Admin",
    thumbnail: {
      public_id: "placeholder_id",
      secure_url: "https://via.placeholder.com/150"
    }
  }
];


// ----------------------
// Seed Function
// ----------------------
const seedDB = async () => {
  try {
    await connectDb();

    // Clear existing courses (optional)
    await Course.deleteMany({});

    // Add new courses
    await Course.insertMany(seedCourses);

    console.log("✅ Dummy courses added successfully!");
    process.exit();
  } catch (error) {
    console.error("❌ Error seeding courses:", error);
    process.exit(1);
  }
};

seedDB();
