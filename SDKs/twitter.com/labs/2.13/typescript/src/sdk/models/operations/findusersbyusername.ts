import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FindUsersByUsernameQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=expansions" })
  expansions?: shared.UserExpansionsParameterEnum[];

  @Metadata({ data: "queryParam, style=form;explode=false;name=media.fields" })
  mediaFields?: shared.MediaFieldsParameterEnum[];

  @Metadata({ data: "queryParam, style=form;explode=false;name=place.fields" })
  placeFields?: shared.PlaceFieldsParameterEnum[];

  @Metadata({ data: "queryParam, style=form;explode=false;name=poll.fields" })
  pollFields?: shared.PollFieldsParameterEnum[];

  @Metadata({ data: "queryParam, style=form;explode=false;name=tweet.fields" })
  tweetFields?: shared.TweetFieldsParameterEnum[];

  @Metadata({ data: "queryParam, style=form;explode=false;name=user.fields" })
  userFields?: shared.UserFieldsParameterEnum[];

  @Metadata({ data: "queryParam, style=form;explode=false;name=usernames" })
  usernames: string[];
}


export class FindUsersByUsernameRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: FindUsersByUsernameQueryParams;
}


export class FindUsersByUsernameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: any;

  @Metadata()
  problem?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  userLookupResponse?: shared.UserLookupResponse;
}
