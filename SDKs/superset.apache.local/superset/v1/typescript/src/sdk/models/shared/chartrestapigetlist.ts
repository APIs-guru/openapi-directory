import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Meta8 } from "./meta8";
import { Meta5 } from "./meta5";
import { Meta7 } from "./meta7";
import { Meta6 } from "./meta6";


export class ChartRestApiGetList extends SpeakeasyBase {
  @Metadata({ data: "json, name=cache_timeout" })
  cacheTimeout?: number;

  @Metadata({ data: "json, name=changed_by" })
  changedBy?: Meta8;

  @Metadata({ data: "json, name=changed_by_name" })
  changedByName?: any;

  @Metadata({ data: "json, name=changed_by_url" })
  changedByUrl?: any;

  @Metadata({ data: "json, name=changed_on_delta_humanized" })
  changedOnDeltaHumanized?: any;

  @Metadata({ data: "json, name=changed_on_utc" })
  changedOnUtc?: any;

  @Metadata({ data: "json, name=created_by" })
  createdBy?: Meta5;

  @Metadata({ data: "json, name=datasource_id" })
  datasourceId?: number;

  @Metadata({ data: "json, name=datasource_name_text" })
  datasourceNameText?: any;

  @Metadata({ data: "json, name=datasource_type" })
  datasourceType?: string;

  @Metadata({ data: "json, name=datasource_url" })
  datasourceUrl?: any;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=description_markeddown" })
  descriptionMarkeddown?: any;

  @Metadata({ data: "json, name=edit_url" })
  editUrl?: any;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=owners" })
  owners?: Meta7;

  @Metadata({ data: "json, name=params" })
  params?: string;

  @Metadata({ data: "json, name=slice_name" })
  sliceName?: string;

  @Metadata({ data: "json, name=table" })
  table?: Meta6;

  @Metadata({ data: "json, name=thumbnail_url" })
  thumbnailUrl?: any;

  @Metadata({ data: "json, name=url" })
  url?: any;

  @Metadata({ data: "json, name=viz_type" })
  vizType?: string;
}
