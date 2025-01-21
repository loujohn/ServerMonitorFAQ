import { type Messages } from "../types/messages";
import { createTranslator } from "next-intl";

export default function getNamespaces(messages: Messages, locale: string) {
  return {
    get index() {
      return createTranslator({ messages, namespace: "Index", locale });
    },
    get support() {
      return createTranslator({ messages, namespace: "Support", locale });
    },
    get privacy() {
      return createTranslator({ messages, namespace: "Privacy", locale });
    },
  };
}
