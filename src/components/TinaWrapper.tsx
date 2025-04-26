import React from "react";
import { TinaProvider, TinaCMS } from "tinacms";
import tinaConfig from "../../tina/config";

export default function TinaWrapper() {
  return (
    <TinaProvider cms={new TinaCMS({ ...tinaConfig, clientId: tinaConfig.clientId || "", media: undefined })}>
      <div className="text-center">
        <h1 className="text-xl font-bold">TinaCMS integrado ✅</h1>
      </div>
    </TinaProvider>
  );
}
 