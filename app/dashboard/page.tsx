import { promises as fs } from "fs";
import path from "path";
import { Metadata } from "next";
import { z } from "zod";

import { columns } from "./components/columns";
import { UserNav } from "./components/user-nav";
import { personSchema } from "./data/schema";
import DataTableWrapper from "./components/data-table-wrapper";

export const metadata: Metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
};

export default async function TaskPage() {
  const people = await getPeople();

  // Simulate a database read for people.
  async function getPeople() {
    const data = await fs.readFile(
      path.join(process.cwd(), "app/dashboard/data/people.json")
    );

    const people = JSON.parse(data.toString());

    return z.array(personSchema).parse(people);
  }

  return (
    <>
      <div className="h-full flex-1 flex-col space-y-8 p-8 flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">¡Bienvenido!</h2>
            <p className="text-muted-foreground">
              Lista de usuarios con verificación facial
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <UserNav />
          </div>
        </div>
        <DataTableWrapper people={people} columns={columns} />
      </div>
    </>
  );
}
