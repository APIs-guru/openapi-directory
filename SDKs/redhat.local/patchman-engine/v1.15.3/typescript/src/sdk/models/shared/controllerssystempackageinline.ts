import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ControllersSystemPackageInline extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=evra" })
  evra?: string;

  @Metadata({ data: "json, name=latest_evra" })
  latestEvra?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=summary" })
  summary?: string;

  @Metadata({ data: "json, name=updatable" })
  updatable?: boolean;
}
