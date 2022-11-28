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
var GetDashboardIdOrSlugDatasetsPathParams = /** @class */ (function (_super) {
    __extends(GetDashboardIdOrSlugDatasetsPathParams, _super);
    function GetDashboardIdOrSlugDatasetsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id_or_slug" }),
        __metadata("design:type", String)
    ], GetDashboardIdOrSlugDatasetsPathParams.prototype, "idOrSlug", void 0);
    return GetDashboardIdOrSlugDatasetsPathParams;
}(SpeakeasyBase));
export { GetDashboardIdOrSlugDatasetsPathParams };
var GetDashboardIdOrSlugDatasetsSecurity = /** @class */ (function (_super) {
    __extends(GetDashboardIdOrSlugDatasetsSecurity, _super);
    function GetDashboardIdOrSlugDatasetsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], GetDashboardIdOrSlugDatasetsSecurity.prototype, "jwt", void 0);
    return GetDashboardIdOrSlugDatasetsSecurity;
}(SpeakeasyBase));
export { GetDashboardIdOrSlugDatasetsSecurity };
var GetDashboardIdOrSlugDatasets200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDashboardIdOrSlugDatasets200ApplicationJson, _super);
    function GetDashboardIdOrSlugDatasets200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result", elemType: shared.DashboardDatasetSchema }),
        __metadata("design:type", Array)
    ], GetDashboardIdOrSlugDatasets200ApplicationJson.prototype, "result", void 0);
    return GetDashboardIdOrSlugDatasets200ApplicationJson;
}(SpeakeasyBase));
export { GetDashboardIdOrSlugDatasets200ApplicationJson };
var GetDashboardIdOrSlugDatasets400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDashboardIdOrSlugDatasets400ApplicationJson, _super);
    function GetDashboardIdOrSlugDatasets400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDashboardIdOrSlugDatasets400ApplicationJson.prototype, "message", void 0);
    return GetDashboardIdOrSlugDatasets400ApplicationJson;
}(SpeakeasyBase));
export { GetDashboardIdOrSlugDatasets400ApplicationJson };
var GetDashboardIdOrSlugDatasets401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDashboardIdOrSlugDatasets401ApplicationJson, _super);
    function GetDashboardIdOrSlugDatasets401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDashboardIdOrSlugDatasets401ApplicationJson.prototype, "message", void 0);
    return GetDashboardIdOrSlugDatasets401ApplicationJson;
}(SpeakeasyBase));
export { GetDashboardIdOrSlugDatasets401ApplicationJson };
var GetDashboardIdOrSlugDatasets404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDashboardIdOrSlugDatasets404ApplicationJson, _super);
    function GetDashboardIdOrSlugDatasets404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDashboardIdOrSlugDatasets404ApplicationJson.prototype, "message", void 0);
    return GetDashboardIdOrSlugDatasets404ApplicationJson;
}(SpeakeasyBase));
export { GetDashboardIdOrSlugDatasets404ApplicationJson };
var GetDashboardIdOrSlugDatasetsRequest = /** @class */ (function (_super) {
    __extends(GetDashboardIdOrSlugDatasetsRequest, _super);
    function GetDashboardIdOrSlugDatasetsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDashboardIdOrSlugDatasetsPathParams)
    ], GetDashboardIdOrSlugDatasetsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDashboardIdOrSlugDatasetsSecurity)
    ], GetDashboardIdOrSlugDatasetsRequest.prototype, "security", void 0);
    return GetDashboardIdOrSlugDatasetsRequest;
}(SpeakeasyBase));
export { GetDashboardIdOrSlugDatasetsRequest };
var GetDashboardIdOrSlugDatasetsResponse = /** @class */ (function (_super) {
    __extends(GetDashboardIdOrSlugDatasetsResponse, _super);
    function GetDashboardIdOrSlugDatasetsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDashboardIdOrSlugDatasetsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDashboardIdOrSlugDatasets200ApplicationJson)
    ], GetDashboardIdOrSlugDatasetsResponse.prototype, "getDashboardIdOrSlugDatasets200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDashboardIdOrSlugDatasets400ApplicationJson)
    ], GetDashboardIdOrSlugDatasetsResponse.prototype, "getDashboardIdOrSlugDatasets400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDashboardIdOrSlugDatasets401ApplicationJson)
    ], GetDashboardIdOrSlugDatasetsResponse.prototype, "getDashboardIdOrSlugDatasets401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDashboardIdOrSlugDatasets404ApplicationJson)
    ], GetDashboardIdOrSlugDatasetsResponse.prototype, "getDashboardIdOrSlugDatasets404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDashboardIdOrSlugDatasetsResponse.prototype, "statusCode", void 0);
    return GetDashboardIdOrSlugDatasetsResponse;
}(SpeakeasyBase));
export { GetDashboardIdOrSlugDatasetsResponse };
