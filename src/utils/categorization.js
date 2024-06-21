export function categorizeByHierarchy(objectsArray) {
    const categories = {};
  
    objectsArray.forEach((obj) => {
      const hierarchyID = obj.HierarchyID;
      if (!categories[hierarchyID]) {
        categories[hierarchyID] = [];
      }
      categories[hierarchyID].push(obj);
    });
  
    return Object.values(categories);
  }
  
  
  export function categorizeByParentProductCategory(objectsArray) {
    function findChildren(parentID) {
      const children = [];
      objectsArray.forEach((obj) => {
        if (obj.ParentProductCategoryID === parentID) {
          const child = { ...obj };
          child.children = findChildren(obj.ProductCategoryID);
          children.push(child);
        }
      });
      return children;
    }
  
    return findChildren(0); // Assuming the root ParentProductCategoryID is 0
  }
  
  
  