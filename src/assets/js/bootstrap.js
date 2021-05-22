import  "@coreui/coreui/dist/js/coreui.bundle.min.js"
import axios from "axios";
import { HOST_API } from "../../../env"

window.axios = require("axios");
axios.defaults.baseURL = `${HOST_API}/api`;