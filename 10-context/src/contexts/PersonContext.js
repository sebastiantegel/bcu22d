import { createContext } from "react";
import { User } from "../models/Person";

// Bygga upp ett defaultValue till context

export const PersonContext = createContext(new User(""));
