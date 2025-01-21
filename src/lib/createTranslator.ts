import { createTranslator } from "next-intl";

export function getTranslations(messages: any) {
  return {
    get index() {
      return createTranslator({ messages, namespace: "Index" });
    },
    get support() {
      return createTranslator({ messages, namespace: "Support" });
    },
    get privacy() {
      return createTranslator({ messages, namespace: "Privacy" });
    },
  };
}
