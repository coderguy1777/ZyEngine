#version 330 core

in vec3 i_color;
out vec4 frag_color;

void main() {
  frag_color = vec4(i_color, 1.0);
}