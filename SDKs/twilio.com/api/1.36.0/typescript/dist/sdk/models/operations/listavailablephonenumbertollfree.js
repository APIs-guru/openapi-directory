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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export var LISTAVAILABLEPHONENUMBERTOLLFREE_SERVERS = [
    "https://api.twilio.com",
];
var ListAvailablePhoneNumberTollFreePathParams = /** @class */ (function (_super) {
    __extends(ListAvailablePhoneNumberTollFreePathParams, _super);
    function ListAvailablePhoneNumberTollFreePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberTollFreePathParams.prototype, "accountSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=CountryCode" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberTollFreePathParams.prototype, "countryCode", void 0);
    return ListAvailablePhoneNumberTollFreePathParams;
}(SpeakeasyBase));
export { ListAvailablePhoneNumberTollFreePathParams };
var ListAvailablePhoneNumberTollFreeQueryParams = /** @class */ (function (_super) {
    __extends(ListAvailablePhoneNumberTollFreeQueryParams, _super);
    function ListAvailablePhoneNumberTollFreeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=AreaCode" }),
        __metadata("design:type", Number)
    ], ListAvailablePhoneNumberTollFreeQueryParams.prototype, "areaCode", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Beta" }),
        __metadata("design:type", Boolean)
    ], ListAvailablePhoneNumberTollFreeQueryParams.prototype, "beta", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Contains" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberTollFreeQueryParams.prototype, "contains", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Distance" }),
        __metadata("design:type", Number)
    ], ListAvailablePhoneNumberTollFreeQueryParams.prototype, "distance", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ExcludeAllAddressRequired" }),
        __metadata("design:type", Boolean)
    ], ListAvailablePhoneNumberTollFreeQueryParams.prototype, "excludeAllAddressRequired", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ExcludeForeignAddressRequired" }),
        __metadata("design:type", Boolean)
    ], ListAvailablePhoneNumberTollFreeQueryParams.prototype, "excludeForeignAddressRequired", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ExcludeLocalAddressRequired" }),
        __metadata("design:type", Boolean)
    ], ListAvailablePhoneNumberTollFreeQueryParams.prototype, "excludeLocalAddressRequired", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=FaxEnabled" }),
        __metadata("design:type", Boolean)
    ], ListAvailablePhoneNumberTollFreeQueryParams.prototype, "faxEnabled", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=InLata" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberTollFreeQueryParams.prototype, "inLata", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=InLocality" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberTollFreeQueryParams.prototype, "inLocality", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=InPostalCode" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberTollFreeQueryParams.prototype, "inPostalCode", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=InRateCenter" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberTollFreeQueryParams.prototype, "inRateCenter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=InRegion" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberTollFreeQueryParams.prototype, "inRegion", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MmsEnabled" }),
        __metadata("design:type", Boolean)
    ], ListAvailablePhoneNumberTollFreeQueryParams.prototype, "mmsEnabled", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NearLatLong" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberTollFreeQueryParams.prototype, "nearLatLong", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NearNumber" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberTollFreeQueryParams.prototype, "nearNumber", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListAvailablePhoneNumberTollFreeQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=SmsEnabled" }),
        __metadata("design:type", Boolean)
    ], ListAvailablePhoneNumberTollFreeQueryParams.prototype, "smsEnabled", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=VoiceEnabled" }),
        __metadata("design:type", Boolean)
    ], ListAvailablePhoneNumberTollFreeQueryParams.prototype, "voiceEnabled", void 0);
    return ListAvailablePhoneNumberTollFreeQueryParams;
}(SpeakeasyBase));
export { ListAvailablePhoneNumberTollFreeQueryParams };
var ListAvailablePhoneNumberTollFreeSecurity = /** @class */ (function (_super) {
    __extends(ListAvailablePhoneNumberTollFreeSecurity, _super);
    function ListAvailablePhoneNumberTollFreeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListAvailablePhoneNumberTollFreeSecurity.prototype, "accountSidAuthToken", void 0);
    return ListAvailablePhoneNumberTollFreeSecurity;
}(SpeakeasyBase));
export { ListAvailablePhoneNumberTollFreeSecurity };
var ListAvailablePhoneNumberTollFreeRequest = /** @class */ (function (_super) {
    __extends(ListAvailablePhoneNumberTollFreeRequest, _super);
    function ListAvailablePhoneNumberTollFreeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberTollFreeRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListAvailablePhoneNumberTollFreePathParams)
    ], ListAvailablePhoneNumberTollFreeRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListAvailablePhoneNumberTollFreeQueryParams)
    ], ListAvailablePhoneNumberTollFreeRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListAvailablePhoneNumberTollFreeSecurity)
    ], ListAvailablePhoneNumberTollFreeRequest.prototype, "security", void 0);
    return ListAvailablePhoneNumberTollFreeRequest;
}(SpeakeasyBase));
export { ListAvailablePhoneNumberTollFreeRequest };
var ListAvailablePhoneNumberTollFreeListAvailablePhoneNumberTollFreeResponse = /** @class */ (function (_super) {
    __extends(ListAvailablePhoneNumberTollFreeListAvailablePhoneNumberTollFreeResponse, _super);
    function ListAvailablePhoneNumberTollFreeListAvailablePhoneNumberTollFreeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=available_phone_numbers", elemType: shared.ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberTollFree }),
        __metadata("design:type", Array)
    ], ListAvailablePhoneNumberTollFreeListAvailablePhoneNumberTollFreeResponse.prototype, "availablePhoneNumbers", void 0);
    __decorate([
        Metadata({ data: "json, name=end" }),
        __metadata("design:type", Number)
    ], ListAvailablePhoneNumberTollFreeListAvailablePhoneNumberTollFreeResponse.prototype, "end", void 0);
    __decorate([
        Metadata({ data: "json, name=first_page_uri" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberTollFreeListAvailablePhoneNumberTollFreeResponse.prototype, "firstPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_uri" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberTollFreeListAvailablePhoneNumberTollFreeResponse.prototype, "nextPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListAvailablePhoneNumberTollFreeListAvailablePhoneNumberTollFreeResponse.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListAvailablePhoneNumberTollFreeListAvailablePhoneNumberTollFreeResponse.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_uri" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberTollFreeListAvailablePhoneNumberTollFreeResponse.prototype, "previousPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=start" }),
        __metadata("design:type", Number)
    ], ListAvailablePhoneNumberTollFreeListAvailablePhoneNumberTollFreeResponse.prototype, "start", void 0);
    __decorate([
        Metadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberTollFreeListAvailablePhoneNumberTollFreeResponse.prototype, "uri", void 0);
    return ListAvailablePhoneNumberTollFreeListAvailablePhoneNumberTollFreeResponse;
}(SpeakeasyBase));
export { ListAvailablePhoneNumberTollFreeListAvailablePhoneNumberTollFreeResponse };
var ListAvailablePhoneNumberTollFreeResponse = /** @class */ (function (_super) {
    __extends(ListAvailablePhoneNumberTollFreeResponse, _super);
    function ListAvailablePhoneNumberTollFreeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberTollFreeResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListAvailablePhoneNumberTollFreeListAvailablePhoneNumberTollFreeResponse)
    ], ListAvailablePhoneNumberTollFreeResponse.prototype, "listAvailablePhoneNumberTollFreeResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListAvailablePhoneNumberTollFreeResponse.prototype, "statusCode", void 0);
    return ListAvailablePhoneNumberTollFreeResponse;
}(SpeakeasyBase));
export { ListAvailablePhoneNumberTollFreeResponse };
