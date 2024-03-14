"use client";
import { Fragment, useState } from "react";

type TUser = {
  username: string;
  email?: string;
  name?: string;
  age?: number;
  website?: string;
  active?: boolean;
};

const user: TUser = {
  username: "czantany",
  email: "carlos@milkzoft.com",
  name: "Carlos Santana",
  website: "http://www.js.education",
  active: true,
};
interface IWork {
  company: string;
  position: string;
}

interface IPerson extends IWork {
  name: string;
  age?: number;
}

const attrs = {
  id: "myId",
  className: "text-green-500 text-sm",
};

export default function Home() {
  const [person, setPerson] = useState(user);
  const handleclick = () => {
    const temp: TUser = {
      username: "victortoh",
      name: "Victor Toh",
      email: "victortoh@gmail.com",
      website: "http://victor.toh.is",
      active: true,
    };
    setPerson(temp);
  };
  const message = `This record is for the user ${person.username} and named ${person.name}`;

  return (
    <Fragment>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex">
          <h2 className="text-teal-500 text-3xl">Toh Family Home</h2>
          <p className="text-blue-700 text-2xl">{message}</p>
        </div>
        <p className="text-blue-500 text-2xl">{person.email}</p>
        <p {...attrs}>{person.website}</p>
        <button
          className="rounded-md bg-red-400 p-4 hover:bg-red-200"
          onClick={handleclick}
        >
          Change
        </button>
      </main>
    </Fragment>
  );
}
