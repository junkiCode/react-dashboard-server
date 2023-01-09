import email from "./api/emails.json" assert { type: "json" };
import chats from "./api/chats.json" assert { type: "json" };
import invocices from "./api/invoice.json" assert { type: "json" };
import users from "./api/users.json" assert { type: "json" };
import userProfile from "./api/user.json" assert { type: "json" };
import pricing from "./api/pricing.json" assert { type: "json" };
import faq from "./api/faq.json" assert { type: "json" };
import chartData from "./api/chartData.json" assert { type: "json" };
import rechartData from "./api/rechartData.json" assert { type: "json" };
import dashboard from "./api/dashboard.json" assert { type: "json" };

export default function services(app) {
  app.get("/api/dashboards/:collectionName", async (req, res, next) => {
    const { collectionName } = req.params;
    const data = dashboard[collectionName];
    res.send(data);
  });
  app.get("/api/emails/", async (req, res) => {
    res.send(email);
  });
  app.get("/api/chat/:collectionName", async (req, res) => {
    const { collectionName } = req.params;
    res.send(chats[collectionName]);
  });
  app.get("/api/invoices/", async (req, res) => {
    res.end(invocices);
  });

  app.get("/api/users/:collectionName", async (req, res) => {
    const { collectionName } = req.params;
    res.send(users[collectionName]);
  });
  app.get("/api/user_profile/:collectionName", async (req, res) => {
    const { collectionName } = req.params;
    res.send(userProfile[collectionName]);
  });

  app.get("/api/pricing/:collectionName", async (req, res) => {
    const { collectionName } = req.params;
    res.send(pricing[collectionName]);
  });
  app.get("/api/faq/", () => faq);

  app.get("/api/charts/:type", async (req, res) => {
    const nodeName = req.params.type;
    res.send(chartData[nodeName]);
  });

  app.get("/api/rechart/:type", async (req, res) => {
    const nodeName = req.params.type;
    res.send(rechartData[nodeName]);
  });

  app.use((req, res, next) => {
    res.status(404).send("Your requested url doesn't exist")
  });
}
