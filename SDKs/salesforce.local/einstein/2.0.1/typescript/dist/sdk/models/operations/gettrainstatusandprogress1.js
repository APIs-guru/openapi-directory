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
var GetTrainStatusAndProgress1PathParams = /** @class */ (function (_super) {
    __extends(GetTrainStatusAndProgress1PathParams, _super);
    function GetTrainStatusAndProgress1PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=modelId" }),
        __metadata("design:type", String)
    ], GetTrainStatusAndProgress1PathParams.prototype, "modelId", void 0);
    return GetTrainStatusAndProgress1PathParams;
}(SpeakeasyBase));
export { GetTrainStatusAndProgress1PathParams };
var GetTrainStatusAndProgress1Security = /** @class */ (function (_super) {
    __extends(GetTrainStatusAndProgress1Security, _super);
    function GetTrainStatusAndProgress1Security() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerToken)
    ], GetTrainStatusAndProgress1Security.prototype, "bearerToken", void 0);
    return GetTrainStatusAndProgress1Security;
}(SpeakeasyBase));
export { GetTrainStatusAndProgress1Security };
var GetTrainStatusAndProgress1Request = /** @class */ (function (_super) {
    __extends(GetTrainStatusAndProgress1Request, _super);
    function GetTrainStatusAndProgress1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetTrainStatusAndProgress1PathParams)
    ], GetTrainStatusAndProgress1Request.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetTrainStatusAndProgress1Security)
    ], GetTrainStatusAndProgress1Request.prototype, "security", void 0);
    return GetTrainStatusAndProgress1Request;
}(SpeakeasyBase));
export { GetTrainStatusAndProgress1Request };
var GetTrainStatusAndProgress1Response = /** @class */ (function (_super) {
    __extends(GetTrainStatusAndProgress1Response, _super);
    function GetTrainStatusAndProgress1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetTrainStatusAndProgress1Response.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetTrainStatusAndProgress1Response.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.TrainResponse)
    ], GetTrainStatusAndProgress1Response.prototype, "trainResponse", void 0);
    return GetTrainStatusAndProgress1Response;
}(SpeakeasyBase));
export { GetTrainStatusAndProgress1Response };
