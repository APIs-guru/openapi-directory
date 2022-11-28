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
var DeleteDatasetQueryParams = /** @class */ (function (_super) {
    __extends(DeleteDatasetQueryParams, _super);
    function DeleteDatasetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" }),
        __metadata("design:type", Array)
    ], DeleteDatasetQueryParams.prototype, "q", void 0);
    return DeleteDatasetQueryParams;
}(SpeakeasyBase));
export { DeleteDatasetQueryParams };
var DeleteDatasetSecurity = /** @class */ (function (_super) {
    __extends(DeleteDatasetSecurity, _super);
    function DeleteDatasetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], DeleteDatasetSecurity.prototype, "jwt", void 0);
    return DeleteDatasetSecurity;
}(SpeakeasyBase));
export { DeleteDatasetSecurity };
var DeleteDataset200ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteDataset200ApplicationJson, _super);
    function DeleteDataset200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteDataset200ApplicationJson.prototype, "message", void 0);
    return DeleteDataset200ApplicationJson;
}(SpeakeasyBase));
export { DeleteDataset200ApplicationJson };
var DeleteDataset400ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteDataset400ApplicationJson, _super);
    function DeleteDataset400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteDataset400ApplicationJson.prototype, "message", void 0);
    return DeleteDataset400ApplicationJson;
}(SpeakeasyBase));
export { DeleteDataset400ApplicationJson };
var DeleteDataset401ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteDataset401ApplicationJson, _super);
    function DeleteDataset401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteDataset401ApplicationJson.prototype, "message", void 0);
    return DeleteDataset401ApplicationJson;
}(SpeakeasyBase));
export { DeleteDataset401ApplicationJson };
var DeleteDataset403ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteDataset403ApplicationJson, _super);
    function DeleteDataset403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteDataset403ApplicationJson.prototype, "message", void 0);
    return DeleteDataset403ApplicationJson;
}(SpeakeasyBase));
export { DeleteDataset403ApplicationJson };
var DeleteDataset404ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteDataset404ApplicationJson, _super);
    function DeleteDataset404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteDataset404ApplicationJson.prototype, "message", void 0);
    return DeleteDataset404ApplicationJson;
}(SpeakeasyBase));
export { DeleteDataset404ApplicationJson };
var DeleteDataset422ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteDataset422ApplicationJson, _super);
    function DeleteDataset422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteDataset422ApplicationJson.prototype, "message", void 0);
    return DeleteDataset422ApplicationJson;
}(SpeakeasyBase));
export { DeleteDataset422ApplicationJson };
var DeleteDataset500ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteDataset500ApplicationJson, _super);
    function DeleteDataset500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteDataset500ApplicationJson.prototype, "message", void 0);
    return DeleteDataset500ApplicationJson;
}(SpeakeasyBase));
export { DeleteDataset500ApplicationJson };
var DeleteDatasetRequest = /** @class */ (function (_super) {
    __extends(DeleteDatasetRequest, _super);
    function DeleteDatasetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDatasetQueryParams)
    ], DeleteDatasetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDatasetSecurity)
    ], DeleteDatasetRequest.prototype, "security", void 0);
    return DeleteDatasetRequest;
}(SpeakeasyBase));
export { DeleteDatasetRequest };
var DeleteDatasetResponse = /** @class */ (function (_super) {
    __extends(DeleteDatasetResponse, _super);
    function DeleteDatasetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteDatasetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDataset200ApplicationJson)
    ], DeleteDatasetResponse.prototype, "deleteDataset200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDataset400ApplicationJson)
    ], DeleteDatasetResponse.prototype, "deleteDataset400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDataset401ApplicationJson)
    ], DeleteDatasetResponse.prototype, "deleteDataset401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDataset403ApplicationJson)
    ], DeleteDatasetResponse.prototype, "deleteDataset403ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDataset404ApplicationJson)
    ], DeleteDatasetResponse.prototype, "deleteDataset404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDataset422ApplicationJson)
    ], DeleteDatasetResponse.prototype, "deleteDataset422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDataset500ApplicationJson)
    ], DeleteDatasetResponse.prototype, "deleteDataset500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteDatasetResponse.prototype, "statusCode", void 0);
    return DeleteDatasetResponse;
}(SpeakeasyBase));
export { DeleteDatasetResponse };
