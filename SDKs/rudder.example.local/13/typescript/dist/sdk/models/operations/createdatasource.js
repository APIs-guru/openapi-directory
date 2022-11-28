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
export var CreateDataSource200ApplicationJsonActionEnum;
(function (CreateDataSource200ApplicationJsonActionEnum) {
    CreateDataSource200ApplicationJsonActionEnum["CreateDataSource"] = "createDataSource";
})(CreateDataSource200ApplicationJsonActionEnum || (CreateDataSource200ApplicationJsonActionEnum = {}));
// CreateDataSource200ApplicationJsonData
/**
 * Information about the data sources
**/
var CreateDataSource200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(CreateDataSource200ApplicationJsonData, _super);
    function CreateDataSource200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=datasources", elemType: shared.Datasource }),
        __metadata("design:type", Array)
    ], CreateDataSource200ApplicationJsonData.prototype, "datasources", void 0);
    return CreateDataSource200ApplicationJsonData;
}(SpeakeasyBase));
export { CreateDataSource200ApplicationJsonData };
export var CreateDataSource200ApplicationJsonResultEnum;
(function (CreateDataSource200ApplicationJsonResultEnum) {
    CreateDataSource200ApplicationJsonResultEnum["Success"] = "success";
    CreateDataSource200ApplicationJsonResultEnum["Error"] = "error";
})(CreateDataSource200ApplicationJsonResultEnum || (CreateDataSource200ApplicationJsonResultEnum = {}));
var CreateDataSource200ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateDataSource200ApplicationJson, _super);
    function CreateDataSource200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], CreateDataSource200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", CreateDataSource200ApplicationJsonData)
    ], CreateDataSource200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], CreateDataSource200ApplicationJson.prototype, "result", void 0);
    return CreateDataSource200ApplicationJson;
}(SpeakeasyBase));
export { CreateDataSource200ApplicationJson };
var CreateDataSourceRequest = /** @class */ (function (_super) {
    __extends(CreateDataSourceRequest, _super);
    function CreateDataSourceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Datasource)
    ], CreateDataSourceRequest.prototype, "request", void 0);
    return CreateDataSourceRequest;
}(SpeakeasyBase));
export { CreateDataSourceRequest };
var CreateDataSourceResponse = /** @class */ (function (_super) {
    __extends(CreateDataSourceResponse, _super);
    function CreateDataSourceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateDataSourceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateDataSourceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateDataSource200ApplicationJson)
    ], CreateDataSourceResponse.prototype, "createDataSource200ApplicationJsonObject", void 0);
    return CreateDataSourceResponse;
}(SpeakeasyBase));
export { CreateDataSourceResponse };
