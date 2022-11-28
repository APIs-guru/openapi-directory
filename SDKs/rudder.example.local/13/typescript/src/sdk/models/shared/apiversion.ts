import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ApiVersionAll extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status: any;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version: number;
}


export class ApiVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=all", elemType: ApiVersionAll })
  all?: ApiVersionAll[];

  @SpeakeasyMetadata({ data: "json, name=latest" })
  latest?: number;
}
