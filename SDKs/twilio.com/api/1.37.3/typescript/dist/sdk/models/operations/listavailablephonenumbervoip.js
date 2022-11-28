var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export var ListAvailablePhoneNumberVoipServerList = [
    "https://api.twilio.com",
];
var ListAvailablePhoneNumberVoipPathParams = /** @class */ (function (_super) {
    __extends(ListAvailablePhoneNumberVoipPathParams, _super);
    function ListAvailablePhoneNumberVoipPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberVoipPathParams.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=CountryCode" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberVoipPathParams.prototype, "countryCode", void 0);
    return ListAvailablePhoneNumberVoipPathParams;
}(SpeakeasyBase));
export { ListAvailablePhoneNumberVoipPathParams };
var ListAvailablePhoneNumberVoipQueryParams = /** @class */ (function (_super) {
    __extends(ListAvailablePhoneNumberVoipQueryParams, _super);
    function ListAvailablePhoneNumberVoipQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AreaCode" }),
        __metadata("design:type", Number)
    ], ListAvailablePhoneNumberVoipQueryParams.prototype, "areaCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Beta" }),
        __metadata("design:type", Boolean)
    ], ListAvailablePhoneNumberVoipQueryParams.prototype, "beta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Contains" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberVoipQueryParams.prototype, "contains", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Distance" }),
        __metadata("design:type", Number)
    ], ListAvailablePhoneNumberVoipQueryParams.prototype, "distance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ExcludeAllAddressRequired" }),
        __metadata("design:type", Boolean)
    ], ListAvailablePhoneNumberVoipQueryParams.prototype, "excludeAllAddressRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ExcludeForeignAddressRequired" }),
        __metadata("design:type", Boolean)
    ], ListAvailablePhoneNumberVoipQueryParams.prototype, "excludeForeignAddressRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ExcludeLocalAddressRequired" }),
        __metadata("design:type", Boolean)
    ], ListAvailablePhoneNumberVoipQueryParams.prototype, "excludeLocalAddressRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=FaxEnabled" }),
        __metadata("design:type", Boolean)
    ], ListAvailablePhoneNumberVoipQueryParams.prototype, "faxEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=InLata" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberVoipQueryParams.prototype, "inLata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=InLocality" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberVoipQueryParams.prototype, "inLocality", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=InPostalCode" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberVoipQueryParams.prototype, "inPostalCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=InRateCenter" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberVoipQueryParams.prototype, "inRateCenter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=InRegion" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberVoipQueryParams.prototype, "inRegion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MmsEnabled" }),
        __metadata("design:type", Boolean)
    ], ListAvailablePhoneNumberVoipQueryParams.prototype, "mmsEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NearLatLong" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberVoipQueryParams.prototype, "nearLatLong", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NearNumber" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberVoipQueryParams.prototype, "nearNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListAvailablePhoneNumberVoipQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SmsEnabled" }),
        __metadata("design:type", Boolean)
    ], ListAvailablePhoneNumberVoipQueryParams.prototype, "smsEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VoiceEnabled" }),
        __metadata("design:type", Boolean)
    ], ListAvailablePhoneNumberVoipQueryParams.prototype, "voiceEnabled", void 0);
    return ListAvailablePhoneNumberVoipQueryParams;
}(SpeakeasyBase));
export { ListAvailablePhoneNumberVoipQueryParams };
var ListAvailablePhoneNumberVoipSecurity = /** @class */ (function (_super) {
    __extends(ListAvailablePhoneNumberVoipSecurity, _super);
    function ListAvailablePhoneNumberVoipSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListAvailablePhoneNumberVoipSecurity.prototype, "accountSidAuthToken", void 0);
    return ListAvailablePhoneNumberVoipSecurity;
}(SpeakeasyBase));
export { ListAvailablePhoneNumberVoipSecurity };
var ListAvailablePhoneNumberVoipListAvailablePhoneNumberVoipResponse = /** @class */ (function (_super) {
    __extends(ListAvailablePhoneNumberVoipListAvailablePhoneNumberVoipResponse, _super);
    function ListAvailablePhoneNumberVoipListAvailablePhoneNumberVoipResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=available_phone_numbers", elemType: shared.ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberVoip }),
        __metadata("design:type", Array)
    ], ListAvailablePhoneNumberVoipListAvailablePhoneNumberVoipResponse.prototype, "availablePhoneNumbers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end" }),
        __metadata("design:type", Number)
    ], ListAvailablePhoneNumberVoipListAvailablePhoneNumberVoipResponse.prototype, "end", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_uri" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberVoipListAvailablePhoneNumberVoipResponse.prototype, "firstPageUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_uri" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberVoipListAvailablePhoneNumberVoipResponse.prototype, "nextPageUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListAvailablePhoneNumberVoipListAvailablePhoneNumberVoipResponse.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListAvailablePhoneNumberVoipListAvailablePhoneNumberVoipResponse.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_uri" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberVoipListAvailablePhoneNumberVoipResponse.prototype, "previousPageUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start" }),
        __metadata("design:type", Number)
    ], ListAvailablePhoneNumberVoipListAvailablePhoneNumberVoipResponse.prototype, "start", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberVoipListAvailablePhoneNumberVoipResponse.prototype, "uri", void 0);
    return ListAvailablePhoneNumberVoipListAvailablePhoneNumberVoipResponse;
}(SpeakeasyBase));
export { ListAvailablePhoneNumberVoipListAvailablePhoneNumberVoipResponse };
var ListAvailablePhoneNumberVoipRequest = /** @class */ (function (_super) {
    __extends(ListAvailablePhoneNumberVoipRequest, _super);
    function ListAvailablePhoneNumberVoipRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberVoipRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListAvailablePhoneNumberVoipPathParams)
    ], ListAvailablePhoneNumberVoipRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListAvailablePhoneNumberVoipQueryParams)
    ], ListAvailablePhoneNumberVoipRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListAvailablePhoneNumberVoipSecurity)
    ], ListAvailablePhoneNumberVoipRequest.prototype, "security", void 0);
    return ListAvailablePhoneNumberVoipRequest;
}(SpeakeasyBase));
export { ListAvailablePhoneNumberVoipRequest };
var ListAvailablePhoneNumberVoipResponse = /** @class */ (function (_super) {
    __extends(ListAvailablePhoneNumberVoipResponse, _super);
    function ListAvailablePhoneNumberVoipResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberVoipResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListAvailablePhoneNumberVoipListAvailablePhoneNumberVoipResponse)
    ], ListAvailablePhoneNumberVoipResponse.prototype, "listAvailablePhoneNumberVoipResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListAvailablePhoneNumberVoipResponse.prototype, "statusCode", void 0);
    return ListAvailablePhoneNumberVoipResponse;
}(SpeakeasyBase));
export { ListAvailablePhoneNumberVoipResponse };
