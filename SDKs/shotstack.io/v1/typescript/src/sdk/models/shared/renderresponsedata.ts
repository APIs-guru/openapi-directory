import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Edit } from "./edit";

export enum RenderResponseDataStatusEnum {
    Queued = "queued"
,    Fetching = "fetching"
,    Rendering = "rendering"
,    Saving = "saving"
,    Done = "done"
,    Failed = "failed"
}


// RenderResponseData
/** 
 * The response data returned with the [RenderResponse](#tocs_renderresponse) including status and URL.
**/
export class RenderResponseData extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created: string;

  @Metadata({ data: "json, name=data" })
  data: Edit;

  @Metadata({ data: "json, name=duration" })
  duration?: number;

  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=owner" })
  owner: string;

  @Metadata({ data: "json, name=plan" })
  plan?: string;

  @Metadata({ data: "json, name=poster" })
  poster?: string;

  @Metadata({ data: "json, name=renderTime" })
  renderTime?: number;

  @Metadata({ data: "json, name=status" })
  status: RenderResponseDataStatusEnum;

  @Metadata({ data: "json, name=thumbnail" })
  thumbnail?: string;

  @Metadata({ data: "json, name=updated" })
  updated: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
