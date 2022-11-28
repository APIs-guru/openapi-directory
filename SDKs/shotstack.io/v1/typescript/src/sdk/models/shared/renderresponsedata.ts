import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Edit } from "./edit";


export enum RenderResponseDataStatusEnum {
    Queued = "queued",
    Fetching = "fetching",
    Rendering = "rendering",
    Saving = "saving",
    Done = "done",
    Failed = "failed"
}


// RenderResponseData
/** 
 * The response data returned with the [RenderResponse](#tocs_renderresponse) including status and URL.
**/
export class RenderResponseData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created: string;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: Edit;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "json, name=plan" })
  plan?: string;

  @SpeakeasyMetadata({ data: "json, name=poster" })
  poster?: string;

  @SpeakeasyMetadata({ data: "json, name=renderTime" })
  renderTime?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: RenderResponseDataStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=thumbnail" })
  thumbnail?: string;

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
