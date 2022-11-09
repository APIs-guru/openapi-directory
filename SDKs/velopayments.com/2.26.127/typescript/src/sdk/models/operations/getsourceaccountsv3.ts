import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSourceAccountsV3QueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=fundingAccountId" })
  fundingAccountId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=includeUserDeleted" })
  includeUserDeleted?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=payorId" })
  payorId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=physicalAccountId" })
  physicalAccountId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=physicalAccountName" })
  physicalAccountName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: shared.SourceAccountTypeEnum;
}


export class GetSourceAccountsV3Request extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSourceAccountsV3QueryParams;
}


export class GetSourceAccountsV3Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listSourceAccountResponseV3?: shared.ListSourceAccountResponseV3;

  @Metadata()
  statusCode: number;

  @Metadata()
  inlineResponse400?: any;

  @Metadata()
  inlineResponse401?: any;

  @Metadata()
  inlineResponse403?: any;

  @Metadata()
  inlineResponse404?: any;
}
