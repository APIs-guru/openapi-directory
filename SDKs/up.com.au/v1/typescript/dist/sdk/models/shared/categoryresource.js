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
var CategoryResourceAttributes = /** @class */ (function (_super) {
    __extends(CategoryResourceAttributes, _super);
    function CategoryResourceAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CategoryResourceAttributes.prototype, "name", void 0);
    return CategoryResourceAttributes;
}(SpeakeasyBase));
export { CategoryResourceAttributes };
var CategoryResourceLinks = /** @class */ (function (_super) {
    __extends(CategoryResourceLinks, _super);
    function CategoryResourceLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=self" }),
        __metadata("design:type", String)
    ], CategoryResourceLinks.prototype, "self", void 0);
    return CategoryResourceLinks;
}(SpeakeasyBase));
export { CategoryResourceLinks };
var CategoryResourceRelationshipsChildrenData = /** @class */ (function (_super) {
    __extends(CategoryResourceRelationshipsChildrenData, _super);
    function CategoryResourceRelationshipsChildrenData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CategoryResourceRelationshipsChildrenData.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CategoryResourceRelationshipsChildrenData.prototype, "type", void 0);
    return CategoryResourceRelationshipsChildrenData;
}(SpeakeasyBase));
export { CategoryResourceRelationshipsChildrenData };
var CategoryResourceRelationshipsChildrenLinks = /** @class */ (function (_super) {
    __extends(CategoryResourceRelationshipsChildrenLinks, _super);
    function CategoryResourceRelationshipsChildrenLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=related" }),
        __metadata("design:type", String)
    ], CategoryResourceRelationshipsChildrenLinks.prototype, "related", void 0);
    return CategoryResourceRelationshipsChildrenLinks;
}(SpeakeasyBase));
export { CategoryResourceRelationshipsChildrenLinks };
var CategoryResourceRelationshipsChildren = /** @class */ (function (_super) {
    __extends(CategoryResourceRelationshipsChildren, _super);
    function CategoryResourceRelationshipsChildren() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: CategoryResourceRelationshipsChildrenData }),
        __metadata("design:type", Array)
    ], CategoryResourceRelationshipsChildren.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=links" }),
        __metadata("design:type", CategoryResourceRelationshipsChildrenLinks)
    ], CategoryResourceRelationshipsChildren.prototype, "links", void 0);
    return CategoryResourceRelationshipsChildren;
}(SpeakeasyBase));
export { CategoryResourceRelationshipsChildren };
var CategoryResourceRelationshipsParentData = /** @class */ (function (_super) {
    __extends(CategoryResourceRelationshipsParentData, _super);
    function CategoryResourceRelationshipsParentData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CategoryResourceRelationshipsParentData.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CategoryResourceRelationshipsParentData.prototype, "type", void 0);
    return CategoryResourceRelationshipsParentData;
}(SpeakeasyBase));
export { CategoryResourceRelationshipsParentData };
var CategoryResourceRelationshipsParentLinks = /** @class */ (function (_super) {
    __extends(CategoryResourceRelationshipsParentLinks, _super);
    function CategoryResourceRelationshipsParentLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=related" }),
        __metadata("design:type", String)
    ], CategoryResourceRelationshipsParentLinks.prototype, "related", void 0);
    return CategoryResourceRelationshipsParentLinks;
}(SpeakeasyBase));
export { CategoryResourceRelationshipsParentLinks };
var CategoryResourceRelationshipsParent = /** @class */ (function (_super) {
    __extends(CategoryResourceRelationshipsParent, _super);
    function CategoryResourceRelationshipsParent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", CategoryResourceRelationshipsParentData)
    ], CategoryResourceRelationshipsParent.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=links" }),
        __metadata("design:type", CategoryResourceRelationshipsParentLinks)
    ], CategoryResourceRelationshipsParent.prototype, "links", void 0);
    return CategoryResourceRelationshipsParent;
}(SpeakeasyBase));
export { CategoryResourceRelationshipsParent };
var CategoryResourceRelationships = /** @class */ (function (_super) {
    __extends(CategoryResourceRelationships, _super);
    function CategoryResourceRelationships() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=children" }),
        __metadata("design:type", CategoryResourceRelationshipsChildren)
    ], CategoryResourceRelationships.prototype, "children", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parent" }),
        __metadata("design:type", CategoryResourceRelationshipsParent)
    ], CategoryResourceRelationships.prototype, "parent", void 0);
    return CategoryResourceRelationships;
}(SpeakeasyBase));
export { CategoryResourceRelationships };
// CategoryResource
/**
 * Provides information about a category and its ancestry.
 *
**/
var CategoryResource = /** @class */ (function (_super) {
    __extends(CategoryResource, _super);
    function CategoryResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributes" }),
        __metadata("design:type", CategoryResourceAttributes)
    ], CategoryResource.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CategoryResource.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=links" }),
        __metadata("design:type", CategoryResourceLinks)
    ], CategoryResource.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=relationships" }),
        __metadata("design:type", CategoryResourceRelationships)
    ], CategoryResource.prototype, "relationships", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CategoryResource.prototype, "type", void 0);
    return CategoryResource;
}(SpeakeasyBase));
export { CategoryResource };
