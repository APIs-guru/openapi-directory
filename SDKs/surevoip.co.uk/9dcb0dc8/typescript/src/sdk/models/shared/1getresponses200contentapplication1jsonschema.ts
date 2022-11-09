import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum OneGetResponses200ContentApplication1jsonSchemaStatusEnum {
    Ok = "OK"
}


export class OneGetResponses200ContentApplication1jsonSchema extends SpeakeasyBase {
  @Metadata({ data: "json, name=status" })
  status?: OneGetResponses200ContentApplication1jsonSchemaStatusEnum;
}
