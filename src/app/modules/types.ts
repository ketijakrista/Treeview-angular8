export interface Node {
    name: string;
    type: string;
    children: Node[];
}

export interface INode {
    name: string;
    depth: number;
}