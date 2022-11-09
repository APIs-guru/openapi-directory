import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ScriptDescriptionData } from "./scriptdescriptiondata";
import { ScriptLocalizationDetail } from "./scriptlocalizationdetail";


export class InventoryScriptInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=config" })
  config?: any;

  @Metadata({ data: "json, name=data" })
  data?: ScriptDescriptionData;

  @Metadata({ data: "json, name=eventPattern" })
  eventPattern?: any;

  @Metadata({ data: "json, name=scriptId" })
  scriptId?: string;

  @Metadata({ data: "json, name=scriptLocalizationDetails", elemType: shared.ScriptLocalizationDetail })
  scriptLocalizationDetails?: ScriptLocalizationDetail[];

  @Metadata({ data: "json, name=scriptName" })
  scriptName?: string;

  @Metadata({ data: "json, name=visibility" })
  visibility?: string;
}
