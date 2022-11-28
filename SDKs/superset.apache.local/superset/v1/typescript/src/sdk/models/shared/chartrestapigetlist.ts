import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Meta8 } from "./meta8";
import { Meta5 } from "./meta5";
import { Meta7 } from "./meta7";
import { Meta6 } from "./meta6";



export class ChartRestApiGetList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cache_timeout" })
  cacheTimeout?: number;

  @SpeakeasyMetadata({ data: "json, name=changed_by" })
  changedBy?: Meta8;

  @SpeakeasyMetadata({ data: "json, name=changed_by_name" })
  changedByName?: any;

  @SpeakeasyMetadata({ data: "json, name=changed_by_url" })
  changedByUrl?: any;

  @SpeakeasyMetadata({ data: "json, name=changed_on_delta_humanized" })
  changedOnDeltaHumanized?: any;

  @SpeakeasyMetadata({ data: "json, name=changed_on_utc" })
  changedOnUtc?: any;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy?: Meta5;

  @SpeakeasyMetadata({ data: "json, name=datasource_id" })
  datasourceId?: number;

  @SpeakeasyMetadata({ data: "json, name=datasource_name_text" })
  datasourceNameText?: any;

  @SpeakeasyMetadata({ data: "json, name=datasource_type" })
  datasourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=datasource_url" })
  datasourceUrl?: any;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=description_markeddown" })
  descriptionMarkeddown?: any;

  @SpeakeasyMetadata({ data: "json, name=edit_url" })
  editUrl?: any;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=owners" })
  owners?: Meta7;

  @SpeakeasyMetadata({ data: "json, name=params" })
  params?: string;

  @SpeakeasyMetadata({ data: "json, name=slice_name" })
  sliceName?: string;

  @SpeakeasyMetadata({ data: "json, name=table" })
  table?: Meta6;

  @SpeakeasyMetadata({ data: "json, name=thumbnail_url" })
  thumbnailUrl?: any;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: any;

  @SpeakeasyMetadata({ data: "json, name=viz_type" })
  vizType?: string;
}
