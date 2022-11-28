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
var DeleteDataset1PathParams = /** @class */ (function (_super) {
    __extends(DeleteDataset1PathParams, _super);
    function DeleteDataset1PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=datasetId" }),
        __metadata("design:type", String)
    ], DeleteDataset1PathParams.prototype, "datasetId", void 0);
    return DeleteDataset1PathParams;
}(SpeakeasyBase));
export { DeleteDataset1PathParams };
var DeleteDataset1Security = /** @class */ (function (_super) {
    __extends(DeleteDataset1Security, _super);
    function DeleteDataset1Security() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerToken)
    ], DeleteDataset1Security.prototype, "bearerToken", void 0);
    return DeleteDataset1Security;
}(SpeakeasyBase));
export { DeleteDataset1Security };
var DeleteDataset1Request = /** @class */ (function (_super) {
    __extends(DeleteDataset1Request, _super);
    function DeleteDataset1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDataset1PathParams)
    ], DeleteDataset1Request.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDataset1Security)
    ], DeleteDataset1Request.prototype, "security", void 0);
    return DeleteDataset1Request;
}(SpeakeasyBase));
export { DeleteDataset1Request };
var DeleteDataset1Response = /** @class */ (function (_super) {
    __extends(DeleteDataset1Response, _super);
    function DeleteDataset1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteDataset1Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DeletionResponse)
    ], DeleteDataset1Response.prototype, "deletionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteDataset1Response.prototype, "statusCode", void 0);
    return DeleteDataset1Response;
}(SpeakeasyBase));
export { DeleteDataset1Response };
