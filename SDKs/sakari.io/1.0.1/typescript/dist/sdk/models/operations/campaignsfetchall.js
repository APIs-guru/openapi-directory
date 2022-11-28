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
var CampaignsFetchAllPathParams = /** @class */ (function (_super) {
    __extends(CampaignsFetchAllPathParams, _super);
    function CampaignsFetchAllPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], CampaignsFetchAllPathParams.prototype, "accountId", void 0);
    return CampaignsFetchAllPathParams;
}(SpeakeasyBase));
export { CampaignsFetchAllPathParams };
var CampaignsFetchAllQueryParams = /** @class */ (function (_super) {
    __extends(CampaignsFetchAllQueryParams, _super);
    function CampaignsFetchAllQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], CampaignsFetchAllQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], CampaignsFetchAllQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], CampaignsFetchAllQueryParams.prototype, "offset", void 0);
    return CampaignsFetchAllQueryParams;
}(SpeakeasyBase));
export { CampaignsFetchAllQueryParams };
var CampaignsFetchAllSecurity = /** @class */ (function (_super) {
    __extends(CampaignsFetchAllSecurity, _super);
    function CampaignsFetchAllSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSakariAuth)
    ], CampaignsFetchAllSecurity.prototype, "sakariAuth", void 0);
    return CampaignsFetchAllSecurity;
}(SpeakeasyBase));
export { CampaignsFetchAllSecurity };
var CampaignsFetchAllRequest = /** @class */ (function (_super) {
    __extends(CampaignsFetchAllRequest, _super);
    function CampaignsFetchAllRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CampaignsFetchAllPathParams)
    ], CampaignsFetchAllRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CampaignsFetchAllQueryParams)
    ], CampaignsFetchAllRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CampaignsFetchAllSecurity)
    ], CampaignsFetchAllRequest.prototype, "security", void 0);
    return CampaignsFetchAllRequest;
}(SpeakeasyBase));
export { CampaignsFetchAllRequest };
var CampaignsFetchAllResponse = /** @class */ (function (_super) {
    __extends(CampaignsFetchAllResponse, _super);
    function CampaignsFetchAllResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CampaignsResponse)
    ], CampaignsFetchAllResponse.prototype, "campaignsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CampaignsFetchAllResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], CampaignsFetchAllResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CampaignsFetchAllResponse.prototype, "statusCode", void 0);
    return CampaignsFetchAllResponse;
}(SpeakeasyBase));
export { CampaignsFetchAllResponse };
