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
var CampaignsRemovePathParams = /** @class */ (function (_super) {
    __extends(CampaignsRemovePathParams, _super);
    function CampaignsRemovePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], CampaignsRemovePathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=campaignId" }),
        __metadata("design:type", String)
    ], CampaignsRemovePathParams.prototype, "campaignId", void 0);
    return CampaignsRemovePathParams;
}(SpeakeasyBase));
export { CampaignsRemovePathParams };
var CampaignsRemoveSecurity = /** @class */ (function (_super) {
    __extends(CampaignsRemoveSecurity, _super);
    function CampaignsRemoveSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSakariAuth)
    ], CampaignsRemoveSecurity.prototype, "sakariAuth", void 0);
    return CampaignsRemoveSecurity;
}(SpeakeasyBase));
export { CampaignsRemoveSecurity };
var CampaignsRemove200ApplicationJson = /** @class */ (function (_super) {
    __extends(CampaignsRemove200ApplicationJson, _super);
    function CampaignsRemove200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=success" }),
        __metadata("design:type", Boolean)
    ], CampaignsRemove200ApplicationJson.prototype, "success", void 0);
    return CampaignsRemove200ApplicationJson;
}(SpeakeasyBase));
export { CampaignsRemove200ApplicationJson };
var CampaignsRemoveRequest = /** @class */ (function (_super) {
    __extends(CampaignsRemoveRequest, _super);
    function CampaignsRemoveRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CampaignsRemovePathParams)
    ], CampaignsRemoveRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CampaignsRemoveSecurity)
    ], CampaignsRemoveRequest.prototype, "security", void 0);
    return CampaignsRemoveRequest;
}(SpeakeasyBase));
export { CampaignsRemoveRequest };
var CampaignsRemoveResponse = /** @class */ (function (_super) {
    __extends(CampaignsRemoveResponse, _super);
    function CampaignsRemoveResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CampaignsRemoveResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CampaignsRemoveResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CampaignsRemove200ApplicationJson)
    ], CampaignsRemoveResponse.prototype, "campaignsRemove200ApplicationJsonObject", void 0);
    return CampaignsRemoveResponse;
}(SpeakeasyBase));
export { CampaignsRemoveResponse };
