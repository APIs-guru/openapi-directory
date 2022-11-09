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
var ListDatasetsQueryParams = /** @class */ (function (_super) {
    __extends(ListDatasetsQueryParams, _super);
    function ListDatasetsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=count" }),
        __metadata("design:type", String)
    ], ListDatasetsQueryParams.prototype, "count", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=global" }),
        __metadata("design:type", Boolean)
    ], ListDatasetsQueryParams.prototype, "global", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], ListDatasetsQueryParams.prototype, "offset", void 0);
    return ListDatasetsQueryParams;
}(SpeakeasyBase));
export { ListDatasetsQueryParams };
var ListDatasetsSecurity = /** @class */ (function (_super) {
    __extends(ListDatasetsSecurity, _super);
    function ListDatasetsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerToken)
    ], ListDatasetsSecurity.prototype, "bearerToken", void 0);
    return ListDatasetsSecurity;
}(SpeakeasyBase));
export { ListDatasetsSecurity };
var ListDatasetsRequest = /** @class */ (function (_super) {
    __extends(ListDatasetsRequest, _super);
    function ListDatasetsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListDatasetsQueryParams)
    ], ListDatasetsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListDatasetsSecurity)
    ], ListDatasetsRequest.prototype, "security", void 0);
    return ListDatasetsRequest;
}(SpeakeasyBase));
export { ListDatasetsRequest };
var ListDatasetsResponse = /** @class */ (function (_super) {
    __extends(ListDatasetsResponse, _super);
    function ListDatasetsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListDatasetsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.DatasetList)
    ], ListDatasetsResponse.prototype, "datasetList", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListDatasetsResponse.prototype, "statusCode", void 0);
    return ListDatasetsResponse;
}(SpeakeasyBase));
export { ListDatasetsResponse };
