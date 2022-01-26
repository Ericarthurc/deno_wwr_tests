import { RouterContext } from "../../deps.ts";
import { IItem } from "../types.ts";
import { Item } from "../models/item.model.ts";

export async function getItems(ctx: any) {
  const { request, response } = ctx;
  response.body = { name: "Eric" };
}

export async function getItem(ctx: any) {}

export async function createItem(ctx: { request: any; response: any }) {
  const { request, response } = ctx;
  try {
    if (request.hasBody) {
      const body = request.body();
      const item = await Item.insert(await body.value);

      response.status = 201;
      response.body = {
        status: true,
        data: item,
      };
    }
  } catch (error) {
    throw error;
  }
}

export async function updateItem(ctx: any) {}

export async function deleteItem(ctx: any) {}
