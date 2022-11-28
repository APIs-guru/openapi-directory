import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum OneGetResponses200ContentApplication1jsonSchemaStatusEnum {
    Ok = "OK"
}


export class OneGetResponses200ContentApplication1jsonSchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: OneGetResponses200ContentApplication1jsonSchemaStatusEnum;
}
