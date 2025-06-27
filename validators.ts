
export const validateClients = (clients: any[], tasks: any[]) => {
  const errors: any[] = [];
  const taskIDs = tasks.map((t) => t.TaskID);
  clients.forEach((client, index) => {
    if (!client.ClientID) {
      errors.push({ row: index + 1, field: "ClientID", message: "Missing ClientID" });
    }
    if (client.PriorityLevel < 1 || client.PriorityLevel > 5) {
      errors.push({ row: index + 1, field: "PriorityLevel", message: "PriorityLevel must be 1–5" });
    }
    const requested = client.RequestedTaskIDs?.split("|") || [];
    requested.forEach((tid: string) => {
      if (!taskIDs.includes(tid)) {
        errors.push({ row: index + 1, field: "RequestedTaskIDs", message: `Unknown TaskID \${tid}` });
      }
    });
  });
  return errors;
};
