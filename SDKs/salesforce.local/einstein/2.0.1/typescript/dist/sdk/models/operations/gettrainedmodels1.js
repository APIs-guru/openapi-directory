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
var GetTrainedModels1PathParams = /** @class */ (function (_super) {
    __extends(GetTrainedModels1PathParams, _super);
    function GetTrainedModels1PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=datasetId" }),
        __metadata("design:type", String)
    ], GetTrainedModels1PathParams.prototype, "datasetId", void 0);
    return GetTrainedModels1PathParams;
}(SpeakeasyBase));
export { GetTrainedModels1PathParams };
var GetTrainedModels1QueryParams = /** @class */ (function (_super) {
    __extends(GetTrainedModels1QueryParams, _super);
    function GetTrainedModels1QueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=count" }),
        __metadata("design:type", String)
    ], GetTrainedModels1QueryParams.prototype, "count", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], GetTrainedModels1QueryParams.prototype, "offset", void 0);
    return GetTrainedModels1QueryParams;
}(SpeakeasyBase));
export { GetTrainedModels1QueryParams };
var GetTrainedModels1Security = /** @class */ (function (_super) {
    __extends(GetTrainedModels1Security, _super);
    function GetTrainedModels1Security() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerToken)
    ], GetTrainedModels1Security.prototype, "bearerToken", void 0);
    return GetTrainedModels1Security;
}(SpeakeasyBase));
export { GetTrainedModels1Security };
var GetTrainedModels1Request = /** @class */ (function (_super) {
    __extends(GetTrainedModels1Request, _super);
    function GetTrainedModels1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetTrainedModels1PathParams)
    ], GetTrainedModels1Request.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetTrainedModels1QueryParams)
    ], GetTrainedModels1Request.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetTrainedModels1Security)
    ], GetTrainedModels1Request.prototype, "security", void 0);
    return GetTrainedModels1Request;
}(SpeakeasyBase));
export { GetTrainedModels1Request };
var GetTrainedModels1Response = /** @class */ (function (_super) {
    __extends(GetTrainedModels1Response, _super);
    function GetTrainedModels1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetTrainedModels1Response.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ModelList)
    ], GetTrainedModels1Response.prototype, "modelList", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetTrainedModels1Response.prototype, "statusCode", void 0);
    return GetTrainedModels1Response;
}(SpeakeasyBase));
export { GetTrainedModels1Response };
